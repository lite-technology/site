import styled from "styled-components";
import { getThemeProperty } from "../../../assets/utils/styled";

export const ButtonStyled = styled.button`
display: flex;
align-items: center;

width: 4rem;
height: min-content;
border-radius: 5rem;
border: 1px solid ${getThemeProperty("border", "theme")};
background-color: ${getThemeProperty("cardBackground", "theme")};

span {
    padding: .35rem;
    border-radius: 50%;
    border: 1px solid ${getThemeProperty("border", "theme")};
    background-color: ${getThemeProperty("border", "theme")};
    transition: margin .2s ease-out, transform .21s ease-out;
}

i {
    font-size: .5rem;
}

.show-dark,
.show-light {
    display: none;
}

&.light {
    span {
        margin-left: 0;
    }

    .show-light {
        display: block;
    }
}

&.dark {
    span {
        margin-left: 100%;
        transform: translateX(-100%);
    }

    .show-dark {
        display: block;
    }
}
`;
