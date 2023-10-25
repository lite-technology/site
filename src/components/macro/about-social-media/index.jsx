import { BrandSquare } from "@components/micro";
import brandsData from "./brands.data";
import {
    TitleStyled,
    SupTextStyled,
    SocialSectionStyled,
} from "./styled-social-media";

export default () => {
    return (
        <SocialSectionStyled>
            <SupTextStyled>SOCIAL</SupTextStyled>

            <TitleStyled>MEDIA</TitleStyled>

            {brandsData.map((data, index) => (
                <BrandSquare key={index} {...data} />
            ))}
        </SocialSectionStyled>
    );
};
