import styled from "styled-components";
import { Link } from 'react-router-dom';
import { getThemeProperty } from "@assets/utils/styled";

export const LinkStyled = styled(Link)`
position: relative;
z-index: 1;

&::before {
    position: absolute;
    content: '';
    top: 0;
    left: 31%;
    width: 4%;
    height: 100%;
    z-index: -1;
    border-radius: 100%;
    transform: rotateZ(31deg);
    transition: box-shadow .2s ease-out;
}

&:hover::before {
    box-shadow:
        0 0 12px rgba(${getThemeProperty("blue", "paletteRGB")}, 1),
        0 0 24px rgba(${getThemeProperty("blue", "paletteRGB")}, 1);
}
`;
