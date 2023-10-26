import styled from "styled-components";
import { getThemeProperty } from "@helpers/utilities";

export const FooterStyled = styled.footer`
display: flex;
align-items: center;
justify-content: space-between;
gap: 1rem;

margin: 1rem auto;
padding: 1rem 2.5rem;
width: ${getThemeProperty("maxScreenWidth", "layout")};
max-width: calc(100% - 2rem);
border: 1px groove ${getThemeProperty("border", "theme")};
border-radius: 20rem;

background-color: ${getThemeProperty("cardBackground", "theme")};

@media (max-width: 820px) {
    transition: all .21s ease-out;
}

@media (max-width: 720px) {
    flex-wrap: wrap;
    margin: 0;
    padding: 1rem 1.5rem;
    max-width: 100%;
    border-radius: 0;
    border-right: none;
    border-bottom: none;
    border-left: none;
}

@media (max-width: 328px) {
    justify-content: center;
}
`;

export const GroupLinksStyled = styled.nav`
display: flex;
gap: .5rem;
`;
