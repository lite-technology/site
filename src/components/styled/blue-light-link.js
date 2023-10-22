import styled from "styled-components";
import { Link } from "react-router-dom";
import { getColorFromStyled } from "@assets/utils/styled";

export const BlueLightLinkStyled = styled(Link)`
position: relative;
z-index: 1;

display: flex;
align-items: center;
justify-content: center;
gap: .5rem;

padding: .75rem 1.5rem;
border-radius: 100px;
color: ${getColorFromStyled("light100")};
background-color: ${getColorFromStyled("blue200")};
transition: box-shadow .170s ease-out;

font-weight: bold;

&:hover {
    box-shadow:
        0 .2rem 3rem rgba(${getColorFromStyled("blue", "paletteRGB")}, .7),
        0 .1rem 1rem rgba(${getColorFromStyled("blue", "paletteRGB")}, .3);
}
`;
