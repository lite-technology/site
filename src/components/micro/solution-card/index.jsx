import { CardSolutions } from "./styled-card";

const Solution = (props) => {
    const { title, description } = props;

    return (
        <div>
            <h6>{title}</h6>
            <p>{description}</p>
        </div>
    );
};

export const SolutionsCard = (props) => {
    const { category, solutions } = props;

    return (
        <CardSolutions>
            <h4>{category}</h4>

            {solutions.map((data, index) => (<Solution key={index} {...data} />))}
        </CardSolutions>
    );
};
