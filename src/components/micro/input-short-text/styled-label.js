import styled from "styled-components";
import { getThemeProperty } from "@helpers/utilities";

export const LabelStyled = styled.label`
display: flex;
flex-direction: column;
gap: .5rem;

margin-bottom: 1rem;

& > div::first-letter {
    text-transform: uppercase;
}

sub {
    font-size: .8rem;
    color: ${getThemeProperty("red")};
}
`;
