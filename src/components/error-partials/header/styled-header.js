import styled from "styled-components";

export const HeaderStyled = styled.header`
display: flex;
align-items: center;
justify-content: center;

padding: 5rem 1rem 2rem;

@media (max-width: 420px) {
    h3 {
        font-size: larger;
    }
}
`;
