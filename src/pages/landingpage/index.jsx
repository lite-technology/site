import ContactForm from "@components/macro/contact-form";
import SolutionsContainer from "@components/macro/solutions-container";
import { FloatingHeader, ExternalLink } from "@components/micro";
import { LegalFooterStyled, SectionStyled } from "@components/styled";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

const LandingPage = () => {
    return (
        <>
            <FloatingHeader />

            <SectionStyled>
                <SolutionsContainer />
            </SectionStyled>

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
