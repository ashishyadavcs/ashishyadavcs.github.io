"use client";
import StyledHeader from "@/app/styles/header";
import Link from "next/link";
import React from "react";
import Container from "./Container";
import navigation from "public/data/navigation";

const Header = () => {
    const navbar = navigation.navbar ?? [];
    return (
        <StyledHeader>
            <Container>
                <Link className="logo" href="/">
                    Ashish yadav
                </Link>
                <nav>
                    <ul>
                        {navbar.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <button
                        role="menu"
                        aria-label="button"
                        className="menu"
                        onClick={e => refs.current.header.classList.toggle("active")}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </Container>
        </StyledHeader>
    );
};

export default Header;
