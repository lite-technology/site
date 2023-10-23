import styled from "styled-components";
import { getThemeProperty } from "../../../assets/utils/styled";

export default styled.input`
padding: .75rem 1rem;
width: 100%;
border: 1px solid ${getThemeProperty("border", "theme")};
border-radius: .5rem;
background-color: ${getThemeProperty("background", "theme")};
`;
