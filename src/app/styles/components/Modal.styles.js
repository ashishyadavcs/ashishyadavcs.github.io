import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
`;

export const ModalContainer = styled(motion.div)`
    background-color: var(--card-bg);
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: ${props =>
        props.$size === "small" ? "400px" : props.$size === "large" ? "800px" : "600px"};
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
`;

export const ModalHeader = styled.div`
    padding: 1.5rem;
    border-bottom: 1px solid var(--card-border);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ModalTitle = styled.h3`
    margin: 0;
    font-size: 1.25rem;
    color: var(--text);
`;

export const CloseButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--text);
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    border-radius: 4px;
    transition: background-color 0.2s;

    &:hover {
        background-color: var(--accent);
    }
`;

export const ModalContent = styled.div`
    padding: 1.5rem;
    color: var(--text);
`;

export const ModalFooter = styled.div`
    padding: 1.5rem;
    border-top: 1px solid var(--card-border);
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
`;
