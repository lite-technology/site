import { HtmlLinkBlueLightStyled } from "@components/styled";
import { LetteringLogo } from "@components/micro";
import { HeaderStyled, GroupActionsStyled, LinkStyled } from "./styled-header";

export const FloatingHeader = () => {
    return (
        <HeaderStyled>
            <LetteringLogo />

            <GroupActionsStyled>
                <LinkStyled href={"/#our-solutions"}>
                    Nossas soluções
                </LinkStyled>

                <HtmlLinkBlueLightStyled href={"/#contact"}>
                    Contato
                </HtmlLinkBlueLightStyled>
            </GroupActionsStyled>
        </HeaderStyled>
    );
};
