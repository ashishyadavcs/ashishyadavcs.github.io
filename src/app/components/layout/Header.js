"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styled from "styled-components";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/app/hooks/useTheme";

const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    background: var(--navbar-bg);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px var(--shadow);
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    z-index: 100;

    a {
        color: var(--text);
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &:hover {
            text-decoration: none;
        }
    }
`;

const NavLinks = styled.nav`
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

const NavLink = styled.span`
    color: var(--text);
    text-decoration: none;
    font-weight: 500;
    position: relative;
    cursor: pointer;
    display: block;

    &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 0;
        background-color: var(--primary);
        transition: width 0.3s ease;
    }

    &:hover::after,
    &.active::after {
        width: 100%;
    }

    &:hover {
        text-decoration: none;
    }
`;

const ThemeToggle = styled.button`
    background: transparent;
    border: none;
    color: var(--text);
    font-size: 1.25rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
        background: var(--accent);
    }
`;

const MobileMenuButton = styled.button`
    display: none;
    background: transparent;
    border: none;
    color: var(--text);
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 100;

    @media (max-width: 768px) {
        display: flex;
    }
`;

const MobileMenu = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: var(--background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    z-index: 99;
`;

const MobileNavLink = styled(motion.span)`
    color: var(--text);
    text-decoration: none;
    font-weight: 600;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
        color: var(--primary);
        text-decoration: none;
    }
`;

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const menuVariants = {
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
            },
        },
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
            },
        },
    };

    const linkVariants = {
        closed: { opacity: 0, y: 20 },
        open: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
            },
        }),
    };

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <StyledHeader
            style={{
                boxShadow: isScrolled ? "0 2px 10px var(--shadow)" : "none",
                background: isScrolled ? "var(--navbar-bg)" : "var(--navbar-bg)",
            }}
        >
            <NavContainer>
                <Logo>
                    <Link href="/">Ashish Yadav</Link>
                </Logo>

                <NavLinks>
                    {links.map(link => (
                        <Link key={link.href} href={link.href}>
                            <NavLink className={pathname === link.href ? "active" : ""}>
                                {link.label}
                            </NavLink>
                        </Link>
                    ))}
                </NavLinks>

                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
                        {mounted ? theme === "light" ? <FiMoon /> : <FiSun /> : <FiMoon />}
                    </ThemeToggle>

                    <MobileMenuButton
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileMenuOpen ? <FiX /> : <FiMenu />}
                    </MobileMenuButton>
                </div>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <MobileMenu
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                        >
                            {links.map((link, i) => (
                                <Link key={link.href} href={link.href}>
                                    <MobileNavLink
                                        custom={i}
                                        variants={linkVariants}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </MobileNavLink>
                                </Link>
                            ))}
                        </MobileMenu>
                    )}
                </AnimatePresence>
            </NavContainer>
        </StyledHeader>
    );
};

export default Header;
