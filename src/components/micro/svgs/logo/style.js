import styled from "styled-components";
import { getColorFromPalette } from "@assets/utils/styled";

export const Svg = styled.svg`
width: 120px;

path {
    fill: currentColor;
    transition: fill 0.2s ease-out;
}

&:hover .ray {
    fill: ${getColorFromPalette('blue200')};
}
`;
