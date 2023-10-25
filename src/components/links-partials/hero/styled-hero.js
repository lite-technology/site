import styled from "styled-components";
import { getThemeProperty } from "@helpers/utilities";

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;

    padding: 3rem 0;

    h1 {
        margin-bottom: 1rem;
        text-transform: uppercase;
    }

    p {
        font-size: larger;
    }
`;

export const FigureStyled = styled.figure`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 1;

    --size: 150px;
    margin-bottom: 1rem;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    border: 1px groove ${getThemeProperty("border", "theme")};
    background-color: ${getThemeProperty("dark300")};

    &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background-color: ${getThemeProperty("blue200")};
        background-image: linear-gradient(
            0,
            ${getThemeProperty("blue200")} 0%,
            ${getThemeProperty("purple")} 100%
        );
        transform: rotateZ(36deg);

        transition: all 0.9s ease-out;
    }

    &:hover {
        &::before {
            left: -100%;
            transform: rotateZ(90deg) translateY(-50%);
        }
    }
`;
