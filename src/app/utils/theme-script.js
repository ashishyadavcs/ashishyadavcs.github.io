/**
 * Theme script that runs immediately to prevent theme flickering.
 * This script is injected into the HTML head to set the theme before React hydration.
 */
export const getThemeScript = () => {
    const themeScript = `
        (function() {
            'use strict';
            
            const THEME_STORAGE_KEY = 'theme';
            const THEME_ATTRIBUTE = 'data-theme';
            const THEMES = {
                LIGHT: 'light',
                DARK: 'dark'
            };
            
            function getInitialTheme() {
                try {
                    // Check if theme is stored in localStorage
                    const persistedTheme = localStorage.getItem(THEME_STORAGE_KEY);
                    if (persistedTheme && Object.values(THEMES).includes(persistedTheme)) {
                        return persistedTheme;
                    }
                    
                    // Fallback to system preference
                    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                        return THEMES.DARK;
                    }
                    
                    return THEMES.LIGHT;
                } catch (error) {
                    // Fallback to light theme if any error occurs
                    console.warn('Error getting initial theme:', error);
                    return THEMES.LIGHT;
                }
            }
            
            // Set theme immediately
            const initialTheme = getInitialTheme();
            document.documentElement.setAttribute(THEME_ATTRIBUTE, initialTheme);
        })();
    `;

    return themeScript.replace(/\s+/g, " ").trim();
};
