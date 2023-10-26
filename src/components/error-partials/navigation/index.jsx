import { NavigationStyled, LinkStyled } from "./styled-navigation";

export const NavigationSection = () => {
    return (
        <NavigationStyled>
            <LinkStyled to={'/'}>
                Página inicial
            </LinkStyled>
        </NavigationStyled>
    );
}
