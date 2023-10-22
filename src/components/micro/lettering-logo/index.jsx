import { LinkStyled } from './styled-link';
import { SvgStyled } from './styled-svg';

export const LetteringLogo = (props) => {
    const { to } = props;

    return (
        <LinkStyled to={to}>
            <SvgStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 343 94">
                <path d="M0 93.0909V0H25.2727V72.7273H62.9091V93.0909H0Z" />
                <path d="M159.03 20.3636V0H239.939V20.3636H211.939V93.0909H187.03V20.3636H159.03Z" />
                <path d="M275.05 93.0909V0H342.141V20.3636H300.323V36.3636H338.686V56.7273H300.323V72.7273H341.959V93.0909H275.05Z" />
                <path className="ray" d="M103.045 62.3223L78.8375 93.0909L130.678 53.2999L129.536 49.8298L116.748 50.5238L138.443 32.479L137.53 29.2402H125.654L144.837 0.0909424L100.761 37.5686L101.903 40.8074H110.125L86.3738 60.9342L87.7441 64.173L103.045 62.3223Z" />
            </SvgStyled>
        </LinkStyled>
    );
};
