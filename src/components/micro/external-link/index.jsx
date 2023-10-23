import LinkStyled from './styled-link';

export const ExternalLink = (props) => {
    const { children, href } = props;

    return (
        <LinkStyled href={href} target="_blank" rel="noreferrer noopener">
            {children}
        </LinkStyled>
    );
};
