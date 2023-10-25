import { createGlobalStyle } from "styled-components";
import { getThemeProperty } from "@helpers/utilities";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font: inherit;
    vertical-align: baseline;
}

::-webkit-scrollbar-track {
    background-color: ${getThemeProperty("cardBackground", "theme")};
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 1px solid ${getThemeProperty("cardBackground", "theme")};
    background: ${getThemeProperty("blue200")};
}

html {
    scroll-behavior: smooth;
    color: ${getThemeProperty("text", "theme")};
    background-color: ${getThemeProperty("background", "theme")};
    background-image: url(/svgs/square-${getThemeProperty("title", "theme")}.svg);
}

body {
    line-height: 1;
    font-family: 'Karla','Ubuntu', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    font-family: 'Commissioner', sans-serif;
}

h1, h2, h3 {
    font-weight: 900;
}

h6 {
    font-size: 1rem;
}

h5 {
    font-size: 1.3rem;
}

h4 {
    font-size: 1.6rem;
}

h3 {
    font-size: 1.9rem;
}

h2 {
    font-size: 2.2rem;
}

h1 {
    font-size: 2.7rem;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}

ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

button, a,
input, textarea {
    color: ${getThemeProperty("text", "theme")};
    border: none;
    background: none;

    &:focus {
        outline: 2px solid rgba(${getThemeProperty(
            "purple",
            "paletteRGB"
        )}, 0.71);
        outline-offset: 0;
    }
}

button, a {
    cursor: pointer;
}

textarea,
input {
    &::placeholder {
        color: ${getThemeProperty("gray100")};
    }
}

a {
    color: inherit;
    text-decoration: none;
    transition: color .21s ease-out;

    &:hover {
        color: ${getThemeProperty("purple")};
    }
}

@keyframes rotate360 {
    0% {
        transform: rotateZ(0);
    }
    100% {
        transform: rotateZ(360deg);
    }
}
`;
