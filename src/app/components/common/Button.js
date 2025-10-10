"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

const StyledButton = styled(motion.button)`
    background-color: ${props => (props.$secondary ? "transparent" : "var(--primary)")};
    color: ${props => (props.$secondary ? "var(--primary)" : "white")};
    border: 2px solid var(--primary);
    padding: ${props => (props.$small ? "0.5rem 1rem" : "0.75rem 1.5rem")};
    border-radius: 4px;
    font-weight: 600;
    font-size: ${props => (props.$small ? "0.9rem" : "1rem")};
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover,
    &:focus {
        background-color: ${props => (props.$secondary ? "var(--primary)" : "var(--button-hover)")};
        color: white;
        border-color: ${props => (props.$secondary ? "var(--primary)" : "var(--button-hover)")};
        transform: translateY(-2px);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }
`;

const Button = ({
    children,
    secondary = false,
    small = false,
    onClick,
    type = "button",
    disabled = false,
    ...props
}) => {
    return (
        <StyledButton
            $secondary={secondary}
            $small={small}
            onClick={onClick}
            type={type}
            disabled={disabled}
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            {...props}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
