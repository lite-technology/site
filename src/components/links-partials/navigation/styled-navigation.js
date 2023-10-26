import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { getThemeProperty } from "@helpers/utilities";

export const NavigationStyled = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    margin: 0 auto 5rem;
    width: 720px;
    max-width: calc(100% - 2rem);
`;

const LinksStyled = css`
    position: relative;
    z-index: 2;
    overflow: hidden;

    padding: 1.2rem 2rem;
    width: 100%;
    border-radius: 0.5rem;
    border: 1px groove ${getThemeProperty("border", "theme")};
    background-color: ${getThemeProperty("background", "theme")};
    text-align: center;
    transition: box-shadow 0.21s ease-out;

    &::before,
    &::after {
        content: "";
        position: absolute;
        z-index: -1;
    }

    &::before {
        top: -5rem;
        left: -5rem;

        width: calc(100% + 10rem);
        height: calc(100% + 10rem);
        background-color: ${getThemeProperty("blue200")};
        background-image: linear-gradient(
            35deg,
            ${getThemeProperty("blue200")},
            ${getThemeProperty("purple")},
            ${getThemeProperty("blue200")},
            ${getThemeProperty("purple")}
        );

        animation: movement-background 2s linear infinite;
    }

    &::after {
        --border-size: 0;
        top: var(--border-size);
        right: var(--border-size);
        bottom: var(--border-size);
        left: var(--border-size);
        border-radius: 0.35rem;
        background-color: ${getThemeProperty("background", "theme")};
    }

    &:hover {
        &::after {
            --border-size: 2px;
        }
        box-shadow: 0 0.2rem 3rem
                rgba(${getThemeProperty("blue", "paletteRGB")}, 0.3),
            0 0.1rem 1rem rgba(${getThemeProperty("purple", "paletteRGB")}, 0.3);
    }
`;

export const InternalLinkStyled = styled(Link)`
    ${LinksStyled}
`;
export const ExternalLinkStyled = styled.a`
    ${LinksStyled}
`;
