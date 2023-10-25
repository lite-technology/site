import styled from "styled-components";
import { getThemeProperty } from "@helpers/utilities";

export const FormStyled = styled.form`
display: flex;
flex-direction: column;

scroll-margin-top: 7rem;
margin: 3rem auto;
padding: 3rem 1.5rem 2.5rem;
width: 398px;
max-width: 100%;
border: 1px solid ${getThemeProperty("border", "theme")};
border-radius: 1rem;
background-color: ${getThemeProperty("cardBackground", "theme")};

.valid-feedback,
.invalid-feedback {
    display: none;
    padding: 0 .5rem;
    font-weight: bold;

    &::first-letter {
        text-transform: uppercase;
    }
}

.valid-feedback {
    color: ${getThemeProperty("green")};
}

.invalid-feedback {
    color: ${getThemeProperty("red")};
}

&.was-validated {
    textarea:invalid ~ .invalid-feedback,
    textarea:valid ~ .valid-feedback,
    input:invalid ~ .invalid-feedback,
    input:valid ~ .valid-feedback {
        display: block;
    }
}

h1, h2, h3, h4, h5, h6 {
    margin-bottom: 2rem;
}
`;
