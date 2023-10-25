import styled, { css } from "styled-components";

export const ContainerStyled = styled.div`
padding: 12rem 0;
text-align: center;
`;

export const SupTextStyled = styled.h4`
font-size: 3.6rem;
`;

const BottomTextStyled = css`
display: inline-block;
font-size: 5rem;
`;

export const JoinTextStyled = styled.h3`
${BottomTextStyled}
& + h2 {
    margin-left: 1rem;
}
`;
export const TitleStyled = styled.h2`${BottomTextStyled}`;
