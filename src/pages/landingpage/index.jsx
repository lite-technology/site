import Hero from "@components/macro/hero";
import AboutSoftwares from "@components/macro/about-softwares";
import AboutSocialMedia from "@components/macro/about-social-media";
import AboutMarketing from "@components/macro/about-marketing";
import Solutions from "@components/macro/solutions";
import ContactForm from "@components/macro/contact-form";
import { FloatingHeader, LegalFooter } from "@components/micro";

const LandingPage = () => {
    return (
        <>
            <FloatingHeader />
            <Hero />
            <AboutSoftwares />
            <AboutSocialMedia />
            <AboutMarketing />
            <Solutions />
            <ContactForm />
            <LegalFooter />
        </>
    );
};

export default LandingPage;
