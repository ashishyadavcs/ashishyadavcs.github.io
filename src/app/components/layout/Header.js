"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";
import { useTheme } from "@/app/hooks/useTheme";
import { ANIMATIONS, THEME } from "@/app/constants";
import config from "../../../../public/data/index.js";
import { slideVariants } from "@/app/utils/animation-variants";
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

/**
 * Header component with navigation, theme toggle, and responsive mobile menu
 * @returns {JSX.Element} Header component
 */
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();

    // Scroll threshold constant
    const SCROLL_THRESHOLD = 50;

    /**
     * Handle scroll event to update header appearance
     */
    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    }, []);

    /**
     * Toggle mobile menu visibility
     */
    const toggleMobileMenu = useCallback(() => {
        setMobileMenuOpen(prev => !prev);
    }, []);

    /**
     * Close mobile menu
     */
    const closeMobileMenu = useCallback(() => {
        setMobileMenuOpen(false);
    }, []);

    // Set mounted state on client-side
    useEffect(() => {
        setMounted(true);
    }, []);

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    // Memoized animation variants for mobile menu
    const menuVariants = useMemo(
        () => ({
            closed: {
                x: "100%",
                transition: {
                    type: "spring",
                    stiffness: ANIMATIONS.SPRING.STIFFNESS,
                    damping: ANIMATIONS.SPRING.DAMPING,
                },
            },
            open: {
                x: 0,
                transition: {
                    type: "spring",
                    stiffness: ANIMATIONS.SPRING.STIFFNESS,
                    damping: ANIMATIONS.SPRING.DAMPING,
                },
            },
        }),
        []
    );

    // Memoized animation variants for mobile menu links
    const linkVariants = useMemo(
        () => ({
            closed: { opacity: 0, y: 20 },
            open: i => ({
                opacity: 1,
                y: 0,
                transition: {
                    delay: i * ANIMATIONS.STAGGER.DELAY,
                },
            }),
        }),
        []
    );

    // Get theme icon based on current theme
    const getThemeIcon = useCallback(() => {
        if (!mounted) return <FiMoon />;
        return theme === THEME.LIGHT ? <FiMoon /> : <FiSun />;
    }, [mounted, theme]);

    // Memoized header styles based on scroll state
    const headerStyles = useMemo(
        () => ({
            boxShadow: isScrolled ? "0 2px 10px var(--shadow)" : "none",
            background: "var(--navbar-bg)",
        }),
        [isScrolled]
    );

    return (
        <StyledHeader style={headerStyles}>
            <NavContainer>
                <Logo>
                    <Link href="/">{config.personal.contacts.name}</Link>
                </Logo>

                <NavLinks>
                    {config.navigation.footerLinks.map(link => (
                        <Link key={link.href} href={link.href}>
                            <NavLink className={pathname === link.href ? "active" : ""}>
                                {link.label}
                            </NavLink>
                        </Link>
                    ))}
                </NavLinks>

                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
                        {getThemeIcon()}
                    </ThemeToggle>

                    <MobileMenuButton
                        onClick={toggleMobileMenu}
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
                            {config.navigation.footerLinks.map((link, i) => (
                                <Link key={link.href} href={link.href}>
                                    <MobileNavLink
                                        custom={i}
                                        variants={linkVariants}
                                        onClick={closeMobileMenu}
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
