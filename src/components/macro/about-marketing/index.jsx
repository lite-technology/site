import { BsPersonFillUp } from "react-icons/bs";
import { BrandSquare } from "@components/micro";
import {
    TitleStyled,
    RedoIconStyled,
    ParagraphStryled,
    ContainerStyled,
} from "./styled-content";
import brandsData from "./brands.data";

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

            {brandsData.map((data, index) => (<BrandSquare key={index} {...data} />))}
        </>
    );
};
