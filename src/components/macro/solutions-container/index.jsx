import { SolutionsContainer } from './styled-container';
import { SolutionsCard } from '../../micro';
import { HtmlLinkBlueLightStyled } from '../../styled';
import OurServices from './services.data';

export default () => {
    return (
        <>
            <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
                NOSSAS SOLUÇÕES
            </h2>

            <SolutionsContainer>
                {OurServices.map((services, index) => (<SolutionsCard key={index} {...services} />))}
            </SolutionsContainer>

            <HtmlLinkBlueLightStyled href={'/#contact'} style={{
                margin: '4rem auto',
                padding: '1.25rem',
                maxWidth: '420px'
            }}>
                Entre em contato
            </HtmlLinkBlueLightStyled>
        </>
    );
};
