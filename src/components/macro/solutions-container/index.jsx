import { SolutionsContainer } from './styled-container';
import data from './data';
import { SolutionsCard } from '../../micro';

export default () => {
    return (
        <SolutionsContainer>
            {data.map((solutions, index) => (<SolutionsCard key={index} {...solutions} />))}
        </SolutionsContainer>
    );
};
