import styled from "styled-components";
import { IoArrowRedo } from 'react-icons/io5';

export const ContainerStyled = styled.div`
margin: 5rem 0;
padding: 12rem 0;
`;

export const TitleStyled = styled.h2`
text-align: center;
font-size: 7rem;
`;

export const ParagraphStryled = styled.p`
display: flex;
align-items: center;
justify-content: center;
gap: .5rem;
font-size: 2.35rem;
`;

export const RedoIconStyled = styled(IoArrowRedo)`
position: absolute;
transform: translate(-100%, -90%);
`;
