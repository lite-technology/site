import ContactForm from "../../components/macro/contact-form";
import {
    LetteringLogo,
    ExternalLink,
} from "../../components/micro";
import {
    HtmlLinkBlueLightStyled,
    FloatingHeaderStyled,
    LegalFooterStyled,
    SectionStyled,
} from "../../components/styled";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

const LandingPage = () => {
    return (
        <>
            <FloatingHeaderStyled>
                <LetteringLogo />

                <HtmlLinkBlueLightStyled href={"/#contact"}>
                    Contato
                </HtmlLinkBlueLightStyled>
            </FloatingHeaderStyled>

            <SectionStyled>
                <ContactForm />
            </SectionStyled>

            <LegalFooterStyled>
                <ExternalLink href="https://www.instagram.com/litetechnology/">
                    <AiFillInstagram /> Instagram
                </ExternalLink>
                <ExternalLink href="https://github.com/lite-technology">
                    <AiFillGithub /> GitHub
                </ExternalLink>
            </LegalFooterStyled>
        </>
    );
};

export default LandingPage;
