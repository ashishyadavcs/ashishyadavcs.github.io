"use client";
import Link from "next/link";
import React from "react";
import ButtonStyle from "../styles/button";
import { FaArrowRight } from "react-icons/fa6";

const ElementType = ({ href, className, children, ...props }) => {
    return href ? (
        <Link className={className} href={href} {...props}>
            {children}
        </Link>
    ) : (
        <button className={className} {...props}>
            {children}
        </button>
    );
};
const Button = ({ href, type = "primary", arrow, children, ...props }) => {
    const classname = `btn ${type} `;
    return (
        <ElementType href={href} className={classname} {...props}>
            {children}
            {arrow && <FaArrowRight />}
        </ElementType>
    );
};

export default ButtonStyle(Button);
