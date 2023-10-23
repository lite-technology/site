import styled from "styled-components";
import { getThemeProperty } from "@assets/utils/styled";

export const LegalFooterStyled = styled.footer`
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;

margin: 1rem auto;
padding: 1rem 2.5rem;
width: ${getThemeProperty("maxScreenWidth", "layout")};
max-width: calc(100% - 2rem);
border: 1px solid ${getThemeProperty("border", "theme")};
border-radius: 20rem;

background-color: ${getThemeProperty("cardBackground", "theme")};
`;
