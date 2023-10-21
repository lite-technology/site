import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from 'styled-components';
import { dark, light, palette, GlobalStyle } from '@styles';

export const ThemeContext = createContext({});

export const PaletteProvider = ({ children }) => {
    const [theme, setTheme] = useState(light);
    const storageKey = "litetechnology_theme";

    function saveTheme(theme) {
        localStorage.setItem(storageKey, JSON.stringify(theme));
        setTheme(theme);
    }

    function toggleTheme() {
        let selectedTheme;

        selectedTheme = theme.current === "dark" ? light : dark;
        saveTheme(selectedTheme);
    }

    function useSavedTheme() {
        const storage = localStorage.getItem(storageKey);
        let selectedTheme;

        if (!storage) {
            selectedTheme = light;
        } else {
            const parseTheme = JSON.parse(storage);
            selectedTheme = parseTheme;
        }

        saveTheme(selectedTheme);
    }

    useEffect(() => {
        useSavedTheme();
    }, []);

    return (
        <ThemeContext.Provider value={{ toggleTheme }}>
            <ThemeProvider theme={{ theme, palette }}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
