"use client";
import StyledHeader from "@/app/styles/header";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Container from "./Container";
import navigation from "public/config/navigation";

const Header = () => {
    const navbar = navigation.navbar ?? [];
    const refs = useRef({});

    return (
        <StyledHeader ref={el => (refs.current.header = el)}>
            <Container>
                <Link className="logo" href="/">
                    Ashish yadav
                </Link>
                <nav className="mobilelinks">
                    <ul>
                        {navbar.map((item, index) => (
                            <li
                                key={index}
                                onClick={e => refs.current.header.classList.remove("active")}
                            >
                                <Link href={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
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
            </Container>
        </StyledHeader>
    );
};

export default Header;
