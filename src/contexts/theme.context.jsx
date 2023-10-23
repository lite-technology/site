import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { layout, dark, light, palette, paletteRGB, GlobalStyle } from "@styles";

export const ThemeContext = createContext({});

export const PaletteProvider = ({ children }) => {
    const storageKey = "litetechnology_theme";
    const [theme, setTheme] = useState(getThemeFromLocalStorage);

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(theme));
    }, [theme]);

    function toggleTheme() {
        setTheme(theme.title === "dark" ? light : dark);
    }

    function getThemeFromLocalStorage() {
        const storageValue = localStorage.getItem(storageKey);

        if (storageValue) {
            return JSON.parse(storageValue);
        }

        if (window.matchMedia) {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            return prefersDark ? dark : light;
        }

        return light;
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme, currentTheme: theme.title }}>
            <ThemeProvider theme={{ theme, palette, paletteRGB, layout }}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
