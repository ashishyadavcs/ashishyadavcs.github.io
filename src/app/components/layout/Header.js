"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";
import { useTheme } from "@/app/hooks/useTheme";
import {
    StyledHeader,
    NavContainer,
    Logo,
    NavLinks,
    NavLink,
    ThemeToggle,
    MobileMenuButton,
    MobileMenu,
    MobileNavLink,
} from "../../styles/layout/Header.styles";

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
