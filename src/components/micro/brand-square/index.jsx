import { FigureStyled } from './styled-figure';

export const BrandSquare = (props) => {
    const { top, left, transform, Icon } = props;

    return (
        <FigureStyled style={{
            top: top,
            left: left,
            transform: transform,
        }}>
            <Icon />
        </FigureStyled>
    );
};
