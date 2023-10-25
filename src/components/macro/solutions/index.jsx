import { SolutionsCard } from "@components/micro";
import { HtmlLinkBlueLightStyled } from "@components/styled";
import {
    SolutionsContainer,
    SolutionsSectionStyled,
    TitleStyled,
} from "./styled-solutions";
import OurServices from "./services.data";

export default () => {
    return (
        <SolutionsSectionStyled>
            <TitleStyled id="our-solutions">NOSSAS SOLUÇÕES</TitleStyled>

            <SolutionsContainer>
                {OurServices.map((services, index) => (
                    <SolutionsCard key={index} {...services} />
                ))}
            </SolutionsContainer>

            <HtmlLinkBlueLightStyled
                href={"/#contact"}
                style={{
                    margin: "4rem auto",
                    padding: "1.25rem",
                    maxWidth: "420px",
                }}
            >
                Entre em contato
            </HtmlLinkBlueLightStyled>
        </SolutionsSectionStyled>
    );
};
