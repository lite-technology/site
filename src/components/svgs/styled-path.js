import styled from "styled-components";
import { getThemeProperty } from "@helpers/utilities";

export const PathStyled = styled.path`
fill: ${getThemeProperty("text", "theme")};
`;
