import styled from "styled-components";
import { getThemeProperty } from '../../assets/utils/styled';

export const SectionStyled = styled.section`
position: relative;

margin: 0 auto;
width: ${getThemeProperty("maxScreenWidth", "layout")};
max-width: calc(100% - 2rem);
`;
