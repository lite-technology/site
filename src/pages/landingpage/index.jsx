import {
    HeroSection,
    AboutSoftwaresSection,
    AboutSocialMediaSection,
    AboutMarketingSection,
    SolutionsSection,
    ContactFormSection,
} from "@components/landingpage-partials";
import { FloatingHeader, LegalFooter } from "@components/micro";

export default () => {
    return (
        <>
            <FloatingHeader />
            <HeroSection />
            <AboutSoftwaresSection />
            <AboutSocialMediaSection />
            <AboutMarketingSection />
            <SolutionsSection />
            <ContactFormSection />
            <LegalFooter />
        </>
    );
};
