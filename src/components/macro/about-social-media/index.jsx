import { BrandSquare } from "@components/micro";
import brandsData from "./brands.data";
import {
    ContainerStyled,
    TitleStyled,
    SupTextStyled,
} from "./styled-container";

export default () => {
    return (
        <ContainerStyled>
            <SupTextStyled>SOCIAL</SupTextStyled>

            <TitleStyled>MEDIA</TitleStyled>

            {brandsData.map((data, index) => (
                <BrandSquare key={index} {...data} />
            ))}
        </ContainerStyled>
    );
};
