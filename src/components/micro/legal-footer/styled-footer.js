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
`;

export const GroupLinksStyled = styled.nav`
display: flex;
gap: .5rem;
`;
