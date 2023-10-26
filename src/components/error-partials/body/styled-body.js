import styled from "styled-components";
import { getThemeProperty } from "@helpers/utilities";

export const SectionStyled = styled.section`
margin: 0 auto;
padding: 2rem 1rem;
width: 520px;
max-width: calc(100% - 2rem);
text-align: left;
border-radius: 1rem;
border: 1px groove ${getThemeProperty("border", "theme")};
background-color: ${getThemeProperty("background", "theme")};

p {
    margin-bottom: .2rem;
}

strong {
    font-weight: bolder;
}
`;
