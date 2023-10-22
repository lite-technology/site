import styled from "styled-components";
import { getColorFromStyled } from "@assets/utils/styled";

export const FloatingHeaderStyled = styled.header`
display: flex;
align-items: center;
justify-content: space-between;

margin: 1rem 2rem;
padding: 1rem 2rem;
max-width: 1920px;
border-radius: 20rem;
background-color: ${getColorFromStyled("cardBackground", "theme")};
`;
