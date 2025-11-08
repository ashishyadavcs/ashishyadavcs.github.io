"use client";
import Link from "next/link";
import React from "react";
import ButtonStyle from "../styles/button";

const Button = ({ href, type = "primary", children, ...props }) => {
    const classname = `btn ${type} `;
    if (href)
        return (
            <Link className={classname} href={href}>
                {children}
            </Link>
        );
    return (
        <button className={classname} {...props}>
            {children}
        </button>
    );
};

export default ButtonStyle(Button);
