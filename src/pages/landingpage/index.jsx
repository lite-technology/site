import Hero from "@components/macro/hero";
import AboutSoftwares from "@components/macro/about-softwares";
import AboutSocialMedia from "@components/macro/about-social-media";
import AboutMarketing from "@components/macro/about-marketing";
import SolutionsContainer from "@components/macro/solutions-container";
import ContactForm from "@components/macro/contact-form";
import { FloatingHeader, LegalFooter } from "@components/micro";
import { SectionStyled } from "@components/styled";

const LandingPage = () => {
    return (
        <>
            <FloatingHeader />
            <Hero />

            <SectionStyled>
                <AboutSoftwares />
            </SectionStyled>

            <SectionStyled>
                <AboutSocialMedia />
            </SectionStyled>

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
