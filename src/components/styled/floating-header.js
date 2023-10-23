import styled from "styled-components";
import { getThemeProperty } from "@assets/utils/styled";

export const FloatingHeaderStyled = styled.header`
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
border: 1px solid ${getThemeProperty("border", "theme")};
border-radius: 20rem;
background-color: ${getThemeProperty("cardBackground", "theme")};
box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);
`;
