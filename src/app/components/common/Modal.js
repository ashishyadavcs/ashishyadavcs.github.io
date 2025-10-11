"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import {
    Overlay,
    ModalContainer,
    ModalHeader,
    ModalTitle,
    CloseButton,
    ModalContent,
    ModalFooter,
} from "../../styles/components/Modal.styles";

const Modal = ({
    isOpen,
    onClose,
    title,
    children,
    footer,
    size = "medium", // 'small', 'medium', 'large'
}) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = useCallback(() => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 200);
    }, [onClose]);

    // Close modal on ESC key press
    useEffect(() => {
        const handleEsc = event => {
            if (event.keyCode === 27) {
                handleClose();
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [handleClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <Overlay
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={overlayVariants}
                    transition={{ duration: 0.2 }}
                    onClick={handleClose}
                >
                    <ModalContainer
                        $size={size}
                        variants={modalVariants}
                        transition={{ duration: 0.2, type: "spring", stiffness: 500, damping: 30 }}
                        onClick={e => e.stopPropagation()}
                    >
                        <ModalHeader>
                            <ModalTitle>{title}</ModalTitle>
                            <CloseButton onClick={handleClose} aria-label="Close modal">
                                <FiX />
                            </CloseButton>
                        </ModalHeader>
                        <ModalContent>{children}</ModalContent>
                        {footer && <ModalFooter>{footer}</ModalFooter>}
                    </ModalContainer>
                </Overlay>
            )}
        </AnimatePresence>
    );
};

export default Modal;
