"use client";

import Link from "next/link";
import { StyledButton, StyledLinkButton } from "@/app/styles/components/Button.styles";

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
    // Default motion props
    const motionProps = {
        whileHover: disabled ? {} : { scale: 1.02 },
        whileTap: disabled ? {} : { scale: 0.98 },
    };

    // If href is provided, render as Link wrapped in StyledLinkButton
    if (href) {
        return (
            <Link
                href={href}
                target={href?.includes("http") ? "_blank" : undefined}
                rel={href?.includes("http") ? "noopener noreferrer" : undefined}
                style={{ textDecoration: "none" }}
                {...props}
            >
                <StyledLinkButton
                    $secondary={secondary}
                    $small={small}
                    onClick={onClick}
                    {...motionProps}
                >
                    {children}
                </StyledLinkButton>
            </Link>
        );
    }

    // Regular button
    return (
        <StyledButton
            $secondary={secondary}
            $small={small}
            onClick={onClick}
            type={type}
            disabled={disabled}
            {...motionProps}
            {...props}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
