import styled from "styled-components";
import { getThemeProperty } from "@assets/utils/styled";

export const FloatingHeaderStyled = styled.header`
position: sticky;
top: 1rem;

display: flex;
align-items: center;
justify-content: space-between;
gap: 1rem;

margin: 1rem auto;
padding: 1.2rem 2.5rem;
width: ${getThemeProperty("maxScreenWidth", "layout")};
max-width: calc(100% - 2rem);
border-radius: 20rem;

background-color: ${getThemeProperty("cardBackground", "theme")};
`;
