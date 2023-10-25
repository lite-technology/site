import styled, { css } from "styled-components";
import { SectionStyled } from "@components/styled";

export const SoftwaresSection = styled(SectionStyled)`
padding: 12rem 0;
text-align: center;
`;

export const SupTextStyled = styled.h4`
font-size: 3.6rem;

@media (max-width: 768px) {
    font-size: 2.6rem;
}

@media (max-width: 548px) {
    font-size: 1.6rem;
}

@media (max-width: 328px) {
    font-size: 1.3rem;
}
`;

const BottomTextStyled = css`
display: inline-block;
font-size: 5rem;

@media (max-width: 768px) {
    font-size: 3.5rem;
}

@media (max-width: 548px) {
    font-size: 2.15rem;
}

@media (max-width: 328px) {
    font-size: 1.7rem;
}
`;

export const JoinTextStyled = styled.h3`
${BottomTextStyled}
& + h2 {
    margin-left: 1rem;
}
`;
export const TitleStyled = styled.h2`${BottomTextStyled}`;
