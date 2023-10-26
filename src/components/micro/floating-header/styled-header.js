import styled from "styled-components";
import { getThemeProperty } from "@helpers/utilities";

export const HeaderStyled = styled.header`
position: sticky;
top: 1rem;
z-index: 1050;

display: flex;
align-items: center;
justify-content: space-between;
gap: 1rem;

margin: 1rem auto;
padding: 1.2rem 2.5rem;
width: ${getThemeProperty("maxScreenWidth", "layout")};
max-width: calc(100% - 2rem);
border: 1px groove ${getThemeProperty("border", "theme")};
border-radius: 20rem;
background-color: ${getThemeProperty("cardBackground", "theme")};
box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);

@media (max-width: 820px) {
    transition: all .21s ease-out;
}

@media (max-width: 720px) {
    top: 0;
    margin: 0;
    padding: 1rem;
    max-width: 100%;
    border-radius: 0;
    border-top: none;
    border-right: none;
    border-left: none;
}
`;

export const GroupActionsStyled = styled.div`
display: flex;
align-items: center;
gap: .5rem;

* {
    font-size: 1.1rem;
}

@media (max-width: 720px) {
    * {
        font-size: 1.5rem;
    }
}

@media (max-width: 328px) {
    * {
        font-size: 1rem;
    }
}
`;

export const LinkStyled = styled.a`
padding: .5rem 1rem;
transition: color .21s ease-out;

&:hover {
    color: ${getThemeProperty("purple")};
}
`;
