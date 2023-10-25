import {
    ExternalLinkStyled,
    InternalLinkStyled,
    NavigationStyled,
} from "./styled-navigation";
import linksData from "./links.data";

const InternalLinkComponent = (props) => {
    const { to, describe } = props;

    return <InternalLinkStyled to={to}>{describe}</InternalLinkStyled>;
};

const ExternalLinkComponent = (props) => {
    const { to, describe } = props;

    return (
        <ExternalLinkStyled href={to} rel="noreferrer noopener" target="_blank">
            {describe}
        </ExternalLinkStyled>
    );
};

export const NavigationSection = () => {
    return (
        <NavigationStyled>
            {linksData.map((data, index) => {
                return data.externalLink
                    ? (<ExternalLinkComponent key={index} {...data} />)
                    : (<InternalLinkComponent key={index} {...data} />);
            })}
        </NavigationStyled>
    );
};
