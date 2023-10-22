import styled from "styled-components";
import { getColorFromStyled } from "@assets/utils/styled";

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
    fill: ${getColorFromStyled('blue200')};
}
`;
