import { SolutionsContainer } from './styled-container';
import data from './data';
import { SolutionsCard } from '../../micro';
import { HtmlLinkBlueLightStyled } from '../../styled';

export default () => {
    return (
        <>
            <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
                NOSSAS SOLUÇÕES
            </h2>

            <SolutionsContainer>
                {data.map((solutions, index) => (<SolutionsCard key={index} {...solutions} />))}
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
