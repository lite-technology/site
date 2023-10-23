import { useContext } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { ThemeContext } from "../../../contexts/theme.context";
import { ButtonStyled } from './styled-button';

export const ChangeTheme = () => {
    const { currentTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <ButtonStyled onClick={toggleTheme} className={currentTheme}>
                <span>
                    <BsFillSunFill className="show-light" />
                    <BsFillMoonFill className="show-dark" />
                </span>
            </ButtonStyled>
        </>
    );
};
