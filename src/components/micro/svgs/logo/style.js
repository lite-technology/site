import styled from "styled-components";

export const Svg = styled.svg`
width: 120px;

path {
    transition: fill 0.2s ease-out;
}

&:hover .ray {
    fill: blue;
}
`;
