import styled from "styled-components";
import { SectionStyled } from "@components/styled";

export const HeroSectionStyled = styled(SectionStyled)`
display: flex;
flex-direction: column;
justify-content: flex-end;
height: 80vh;
text-align: center;

h1 {
    margin-bottom: 1rem;
}
`;

export const ContainerSkillsStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 3rem;

padding: 3rem 0 0;
`;

export const SkillStyled = styled.div`
display: flex;
align-items: center;
gap: 1rem;

--font-size: 2rem;
font-weight: 900;
font-family: 'Commissioner', sans-serif;
font-size: var(--font-size);

p {
    max-width: 270px;
    letter-spacing: .05rem;

    &::first-letter {
        text-transform: uppercase;
    }
}

svg {
    --size: 2.5rem;
    width: var(--size);
    height: var(--size);
}
`;
