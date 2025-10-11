import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeader = styled.header`
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

export const NavContainer = styled.div`
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

export const Logo = styled.div`
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

export const NavLinks = styled.nav`
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavLink = styled.span`
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

export const ThemeToggle = styled.button`
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

export const MobileMenuButton = styled.button`
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

export const MobileMenu = styled(motion.div)`
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

export const MobileNavLink = styled(motion.span)`
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
