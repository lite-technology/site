import { LetteringLogo, ExternalLink } from '../../components/micro';
import { BlueLightLinkStyled, FloatingHeaderStyled, LegalFooterStyled } from '../../components/styled';
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai';

const LandingPage = () => {
    return (
        <>
            <FloatingHeaderStyled>
                <LetteringLogo to={'/'} />

                <BlueLightLinkStyled to={'#contact'}>
                    Contato
                </BlueLightLinkStyled>
            </FloatingHeaderStyled>

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
