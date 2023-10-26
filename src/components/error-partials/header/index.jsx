import { FaPoop } from "react-icons/fa";
import { HeaderStyled } from "./styled-header";

export const HeaderSection = () => {
    return (
        <HeaderStyled>
            <h3>
                <FaPoop />{' '}Algo não saiu como esperado!
            </h3>
        </HeaderStyled>
    );
};
