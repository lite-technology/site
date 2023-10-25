import { Link } from "react-router-dom";
import { ChangeTheme } from "@components/micro";
import { FooterStyled } from "./styled-footer";

export const FooterSection = () => {
    return (
        <FooterStyled>
            <ChangeTheme />

            <Link to="/">
                &copy; Lite Technology
            </Link>
        </FooterStyled>
    );
};
