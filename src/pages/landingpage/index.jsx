import { LetteringLogo } from '../../components/micro';
import { BlueLightLinkStyled, FloatingHeaderStyled } from '../../components/styled';

const LandingPage = () => {
    return (
        <>
            <FloatingHeaderStyled>
                <LetteringLogo />

                <BlueLightLinkStyled to={'/'}>
                    Contato
                </BlueLightLinkStyled>
            </FloatingHeaderStyled>
        </>
    );
};

export default LandingPage;
