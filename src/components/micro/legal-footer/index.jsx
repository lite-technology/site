import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { ExternalLink } from "@components/micro";
import { FooterStyled } from "./styled-footer";

export const LegalFooter = () => {
    return (
        <FooterStyled>
            <ExternalLink href="https://www.instagram.com/litetechnology/">
                <AiFillInstagram /> Instagram
            </ExternalLink>
            <ExternalLink href="https://github.com/lite-technology">
                <AiFillGithub /> GitHub
            </ExternalLink>
        </FooterStyled>
    );
};
