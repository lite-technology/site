import { BsPersonFillUp } from "react-icons/bs";
import {
    TitleStyled,
    RedoIconStyled,
    ParagraphStryled,
    ContainerStyled,
} from "./styled-content";

export default () => {
    return (
        <>
            <ContainerStyled>
                <TitleStyled>
                    MARKETING
                    <RedoIconStyled />
                </TitleStyled>

                <ParagraphStryled>
                    +20mil leads <BsPersonFillUp />
                </ParagraphStryled>
            </ContainerStyled>
        </>
    );
};
