import { createGlobalStyle } from "styled-components";
import { getColorFromTheme } from "../assets/utils/styled";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    font-family: 'Karla','Ubuntu', sans-serif;
    box-sizing: border-box;
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
  color: ${getColorFromTheme('text')};
  background-color: ${getColorFromTheme('background')};
}
`;
