import styled from "styled-components";
import { IoArrowRedo } from 'react-icons/io5';
import { SectionStyled } from "@components/styled";

export const MarketingSection = styled(SectionStyled)``;

export const ContainerStyled = styled.div`
padding: 12rem 0;
`;

export const TitleStyled = styled.h2`
text-align: center;
font-size: 7rem;

@media (max-width: 968px) {
    font-size: 5rem;
}

@media (max-width: 768px) {
    font-size: 3rem;
}

@media (max-width: 468px) {
    font-size: 2rem;
}
`;

export const ParagraphStryled = styled.p`
display: flex;
align-items: center;
justify-content: center;
gap: .5rem;
font-size: 2.35rem;

@media (max-width: 768px) {
    font-size: 1.75rem;
}
`;

export const RedoIconStyled = styled(IoArrowRedo)`
position: absolute;
transform: translate(-100%, -90%);
`;
