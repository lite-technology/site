import { Link } from "react-router-dom";
import { AnimatedIconLogo } from "../../micro";
import { FigureStyled, HeaderStyled } from "./styled-hero";

export const HeroSection = () => {
    return (
        <>
            <HeaderStyled>
                <Link to={"/"}>
                    <FigureStyled>
                        <AnimatedIconLogo />
                    </FigureStyled>
                </Link>

                <h1>Lite Technology</h1>
                <p>A inovação na velocidade que você precisa!</p>
            </HeaderStyled>
        </>
    );
};
