import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { ExternalLink, ChangeTheme } from "@components/micro";
import { FooterStyled, GroupLinksStyled } from "./styled-footer";

export const LegalFooter = () => {
    return (
        <FooterStyled>
            <GroupLinksStyled>
                <ExternalLink href="https://www.instagram.com/litetechnology/">
                    <AiFillInstagram /> Instagram
                </ExternalLink>
                <ExternalLink href="https://github.com/lite-technology">
                    <AiFillGithub /> GitHub
                </ExternalLink>
            </GroupLinksStyled>

            <ChangeTheme />
        </FooterStyled>
    );
};
