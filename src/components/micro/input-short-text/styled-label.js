import styled from "styled-components";

export const LabelStyled = styled.label`
display: flex;
flex-direction: column;
gap: .5rem;

margin-bottom: 1rem;

& > div::first-letter {
    text-transform: uppercase;
}
`;
