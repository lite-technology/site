import styled from "styled-components";
import { getThemeProperty } from "@assets/utils/styled";

export const LegalFooterStyled = styled.footer`
display: flex;
align-items: center;
justify-content: space-between;

margin: 1rem auto;
padding: 1rem 2.5rem;
width: ${getThemeProperty("maxScreenWidth", "layout")};
max-width: calc(100% - 2rem);
border-radius: 20rem;

background-color: ${getThemeProperty("cardBackground", "theme")};
`;
