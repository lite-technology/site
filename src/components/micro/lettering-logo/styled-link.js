import styled from "styled-components";
import { Link } from 'react-router-dom';
import { getColorFromStyled } from "@assets/utils/styled";

export const LinkStyled = styled(Link)`
position: relative;
z-index: 1;

&::before {
    position: absolute;
    content: '';
    top: 0;
    left: 27%;
    width: 12%;
    height: 100%;
    z-index: -1;
    border-radius: 100%;
    background-color: ${getColorFromStyled("blue200")};
    transform: rotateZ(35deg);
    filter: blur(17px);
    opacity: 0;
    transition: opacity .2s ease-out;
}

&:hover::before {
    opacity: 1;
}
`;
