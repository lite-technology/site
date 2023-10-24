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
border: 1px solid ${getThemeProperty("border", "theme")};
background-color: ${getThemeProperty("background", "theme")};
background-image: url(/svgs/square-${getThemeProperty("title", "theme")}.svg);
box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .075);

svg {
    --size: 3.2rem;
    width: var(--size);
    height: var(--size);
}
`;
