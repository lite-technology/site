import { createGlobalStyle } from "styled-components";
import { getColorFromStyled } from "@assets/utils/styled";

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
    background-color: #363636;
}

::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 6px;
}

html {
    scroll-behavior: smooth;
}

body {
    color: ${getColorFromStyled("text", "theme")};
    background-color: ${getColorFromStyled("background", "theme")};
    transition-property: background-color, color;
    transition-duration: .2s;
    line-height: 1;
    font-family: 'Karla','Ubuntu', sans-serif;
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
input {
    background: none;
    border: none;

    &:focus {
        outline: 2px solid rgba(${getColorFromStyled("purple", "paletteRGB")}, 0.71);
        outline-offset: 0;
    }
}

button, a {
    cursor: pointer;
}

a {
    color: inherit;
}
`;
