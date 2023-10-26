import { BrandSquare } from "@components/micro";
import brandsData from "./brands.data";
import {
    TitleStyled,
    SupTextStyled,
    JoinTextStyled,
    SoftwaresSection,
} from "./styled-softwares";

export const AboutSoftwaresSection = () => {
    return (
        <SoftwaresSection>
            <SupTextStyled>DESENVOLVIMENTO</SupTextStyled>
            <JoinTextStyled>DE</JoinTextStyled>
            <TitleStyled>SOFTWARE</TitleStyled>

            {brandsData.map((data, index) => (
                <BrandSquare key={index} {...data} />
            ))}
        </SoftwaresSection>
    );
};
