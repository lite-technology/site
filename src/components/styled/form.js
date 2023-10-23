import styled from "styled-components";
import { getThemeProperty } from "../../assets/utils/styled";

export const FormStyled = styled.form`
display: flex;
flex-direction: column;

padding: 3rem 1rem;
width: 320px;
max-width: 100%;
border: 1px solid ${getThemeProperty("border", "theme")};
border-radius: 1rem;
background-color: ${getThemeProperty("cardBackground", "theme")};

.valid-feedback,
.invalid-feedback {
    display: none;
    padding: 0 .5rem;

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
    input:invalid ~ .invalid-feedback,
    input:valid ~ .valid-feedback {
        display: block;
    }
}
`;
