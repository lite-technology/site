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
            <h5>{category}</h5>

            {solutions.map((data, ) => (<Solution key={data.title} {...data} />))}
        </CardSolutions>
    );
};
