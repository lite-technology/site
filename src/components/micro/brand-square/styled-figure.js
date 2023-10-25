import styled from "styled-components";
import { getThemeProperty } from "@helpers/utilities";

export const FigureStyled = styled.figure`
position: absolute;
top: 0;
left: 0;
z-index: 1040;

display: flex;
align-items: center;
justify-content: center;

--size: 8rem;
width: var(--size);
height: var(--size);
border-radius: 1rem;
border: 1px groove ${getThemeProperty("border", "theme")};
background-image: url(/svgs/square-${getThemeProperty("title", "theme")}.svg);
box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .075);
overflow: hidden;

&::before {
    content: '';
    position: absolute;
    top: -1rem;
    left: -1rem;
    right: -1rem;
    bottom: -1rem;
    z-index: -1;
    backdrop-filter: blur(3px);
    background-color: ${getThemeProperty("background", "theme")}80;
}

svg {
    --size: 3.2rem;
    width: var(--size);
    height: var(--size);
}

@media (max-width: 768px) {
    --size: 6rem;

    svg {
        --size: 2.5rem;
    }
}

@media (max-width: 468px) {
    --size: 4rem;

    svg {
        --size: 1.5rem;
    }
}
`;
