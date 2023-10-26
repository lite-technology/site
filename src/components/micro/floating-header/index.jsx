import { TbArrowGuide } from "react-icons/tb";
import { BiMailSend } from "react-icons/bi";
import { HtmlLinkBlueLightStyled } from "@components/styled";
import { LetteringLogo } from "@components/micro";
import { HeaderStyled, GroupActionsStyled, LinkStyled } from "./styled-header";

export const FloatingHeader = () => {
    return (
        <HeaderStyled>
            <LetteringLogo />

            <GroupActionsStyled>
                <LinkStyled href={"/#our-solutions"}>
                    <span className="desktop-hidden">
                        <TbArrowGuide />
                    </span>
                    <span className="mobile-hidden">Nossas soluções</span>
                </LinkStyled>

                <HtmlLinkBlueLightStyled href={"/#contact"}>
                    <span className="desktop-hidden">
                        <BiMailSend />
                    </span>
                    <span className="mobile-hidden">Contato</span>
                </HtmlLinkBlueLightStyled>
            </GroupActionsStyled>
        </HeaderStyled>
    );
};
