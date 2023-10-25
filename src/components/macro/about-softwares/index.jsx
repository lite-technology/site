import { BrandSquare } from "@components/micro";
import brandsData from "./brands.data";
import {
    ContainerStyled,
    TitleStyled,
    SupTextStyled,
    JoinTextStyled,
} from "./styled-container";

export default () => {
    return (
        <ContainerStyled>
            <SupTextStyled>DESENVOLVIMENTO</SupTextStyled>
            <JoinTextStyled>DE</JoinTextStyled>
            <TitleStyled>SOFTWARE</TitleStyled>

            {brandsData.map((data, index) => (
                <BrandSquare key={index} {...data} />
            ))}
        </ContainerStyled>
    );
};
