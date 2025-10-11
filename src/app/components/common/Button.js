"use client";

import Link from "next/link";
import { StyledButton } from "@/app/styles/components/Button.styles";

const Button = ({
    children,
    secondary = false,
    small = false,
    onClick,
    type = "button",
    disabled = false,
    href,
    ...props
}) => {
    // Use the same StyledButton but change the underlying component
    const Component = href ? Link : "button";

    return (
        <StyledButton
            as={Component}
            href={href}
            $secondary={secondary}
            $small={small}
            onClick={onClick}
            type={href ? undefined : type}
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
