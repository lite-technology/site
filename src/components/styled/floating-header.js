import styled from "styled-components";
import { getColorFromStyled } from "@assets/utils/styled";

export const FloatingHeaderStyled = styled.header`
position: sticky;
top: 1rem;

display: flex;
align-items: center;
justify-content: space-between;

margin: 1rem auto;
padding: 1.2rem 2.5rem;
width: 1440px;
max-width: calc(100% - 4rem);
border-radius: 20rem;

background-color: ${getColorFromStyled("cardBackground", "theme")};
`;
