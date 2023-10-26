import styled from "styled-components";
import { getThemeProperty } from "@helpers/utilities";

export const ButtonStyled = styled.button`
display: flex;
align-items: center;

width: 4rem;
height: min-content;
border-radius: 5rem;
border: 1px solid ${getThemeProperty("border", "theme")};
background-color: ${getThemeProperty("cardBackground", "theme")};

transition: background-color .21s ease-out;

&:hover {
    border-color: ${getThemeProperty("blue200")};
    background-color: rgba(${getThemeProperty("blue", "paletteRGB")}, .3);

    span {
        background-color: ${getThemeProperty("background", "theme")};
    }
}

span {
    padding: .35rem;
    border-radius: 50%;
    border: 1px solid ${getThemeProperty("border", "theme")};
    background-color: ${getThemeProperty("border", "theme")};
    transition: margin .2s ease-out, transform .21s ease-out, background-color .21s ease-out;
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
