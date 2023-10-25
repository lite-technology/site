import styled from "styled-components";
import { getThemeProperty } from "@helpers/utilities";

export const SvgStyled = styled.svg`
display: block;
width: 120px;
max-width: 100%;
height: min-content;

path {
    fill: currentColor;
    transition: fill 0.2s ease-out;
}

&:hover .ray {
    fill: ${getThemeProperty('blue200')};
}

@media (max-width: 720px) {
    width: 70px;
}
`;
