import { BsPersonFillUp } from "react-icons/bs";
import { BrandSquare } from "@components/micro";
import {
    TitleStyled,
    RedoIconStyled,
    ParagraphStryled,
    ContainerStyled,
    MarketingSection,
} from "./styled-marketing";
import brandsData from "./brands.data";

export default () => {
    return (
        <MarketingSection>
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
        </MarketingSection>
    );
};
