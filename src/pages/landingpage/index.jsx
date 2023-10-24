import ContactForm from "@components/macro/contact-form";
import SolutionsContainer from "@components/macro/solutions-container";
import AboutMarketing from "@components/macro/about-marketing";
import { FloatingHeader, LegalFooter } from "@components/micro";
import { SectionStyled } from "@/components/styled";

const LandingPage = () => {
    return (
        <>
            <FloatingHeader />

            <SectionStyled>
                <AboutMarketing />
            </SectionStyled>

            <SectionStyled>
                <SolutionsContainer />
            </SectionStyled>

            <SectionStyled>
                <ContactForm />
            </SectionStyled>

            <LegalFooter />
        </>
    );
};

export default LandingPage;
