"use client";

import { useState, useEffect, createContext, useContext, useCallback } from "react";
import { THEME } from "@/app/constants";

const ThemeContext = createContext(undefined);

/**
 * Safely get the initial theme from localStorage or system preference
 * @returns {string} The initial theme value
 */
function getInitialTheme() {
    if (typeof window === "undefined") {
        return THEME.VALUES.LIGHT;
    }

    try {
        const persistedTheme = localStorage.getItem(THEME.STORAGE_KEY);
        if (persistedTheme && Object.values(THEME.VALUES).includes(persistedTheme)) {
            return persistedTheme;
        }

        // Check system preference
        const systemPrefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
        return systemPrefersDark ? THEME.VALUES.DARK : THEME.VALUES.LIGHT;
    } catch (error) {
        console.warn("Error accessing theme preferences:", error);
        return THEME.VALUES.LIGHT;
    }
}

/**
 * Apply theme to document and localStorage
 * @param {string} theme - The theme to apply
 */
function applyTheme(theme) {
    if (typeof window === "undefined") return;

    try {
        localStorage.setItem(THEME.STORAGE_KEY, theme);
        document.documentElement.setAttribute(THEME.ATTRIBUTE, theme);
    } catch (error) {
        console.warn("Error applying theme:", error);
    }
}

/**
 * Theme provider component that manages theme state and persistence
 */
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => getInitialTheme());

    // Sync theme with localStorage and document on mount
    useEffect(() => {
        const initialTheme = getInitialTheme();
        setTheme(initialTheme);
        applyTheme(initialTheme);
    }, []);

    const toggleTheme = useCallback(() => {
        const newTheme = theme === THEME.VALUES.LIGHT ? THEME.VALUES.DARK : THEME.VALUES.LIGHT;
        setTheme(newTheme);
        applyTheme(newTheme);
    }, [theme]);

    const contextValue = { theme, toggleTheme };

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

/**
 * Hook to access theme context
 * @returns {object} Theme context with theme and toggleTheme
 * @throws {Error} When used outside of ThemeProvider
 */
export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
};
