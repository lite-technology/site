import styled from "styled-components";
import { SectionStyled } from "@components/styled";

export const SocialSectionStyled = styled(SectionStyled)`
padding: 12rem 0;
text-align: center;
`;

export const SupTextStyled = styled.h4`
font-size: 7.5rem;

@media (max-width: 768px) {
    font-size: 5.5rem;
}

@media (max-width: 548px) {
    font-size: 3rem;
}
`;

export const TitleStyled = styled.h2`
font-size: 8rem;

@media (max-width: 768px) {
    font-size: 6rem;
}

@media (max-width: 548px) {
    font-size: 3.4rem;
}
`;
