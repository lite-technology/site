import { NavigationStyled, LinkStyled } from "./styled-navigation";

export const NavigationSection = () => {
    return (
        <NavigationStyled>
            <LinkStyled to={'/'}>
                Voltar ao ínicio
            </LinkStyled>
        </NavigationStyled>
    );
}
