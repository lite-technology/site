import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { getThemeProperty } from "@helpers/utilities";

const BlueLight = css`
position: relative;
z-index: 1;

display: flex;
align-items: center;
justify-content: center;
gap: .5rem;

padding: .75rem 1.5rem;
border-radius: 100px;
color: ${getThemeProperty("light100")};
background-color: ${getThemeProperty("blue200")};
transition: box-shadow .170s ease-out;

font-weight: bold;

&:hover {
    box-shadow:
        0 .2rem 3rem rgba(${getThemeProperty("blue", "paletteRGB")}, .7),
        0 .1rem 1rem rgba(${getThemeProperty("blue", "paletteRGB")}, .3);
}
`;

export const HtmlLinkBlueLightStyled = styled.a`${BlueLight}`;
export const LinkBlueLightStyled = styled(Link)`${BlueLight}`;

export const ButtonBlueLightStyled = styled.button`
${BlueLight}
transition: background-color .21s ease-out;

svg {
    --size: 1.5rem;
    position: absolute;

    width: var(--size);
    height: var(--size);
    opacity: 0;
    animation: rotate360 1s linear infinite;
    transition: opacity .21s ease-out;
    color: rgb(${getThemeProperty("purple", "paletteRGB")});
}

&:disabled {
    cursor: no-drop;
    box-shadow: unset;
}

&[data-loading=true] {
    color: transparent;
    border: 1px solid rgb(${getThemeProperty("purple", "paletteRGB")});
    background-color: rgba(${getThemeProperty("purple", "paletteRGB")}, .3);

    svg {
        opacity: 1;
    }
}
`;
