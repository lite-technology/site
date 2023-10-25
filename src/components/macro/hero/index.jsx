import { IoDiamond } from "react-icons/io5";
import { TbArrowsRandom } from "react-icons/tb";
import { RayIconSvg } from "@components/svgs";
import { ContainerSkillsStyled, HeroSectionStyled, SkillStyled } from "./styled-hero";

export default () => {
    return (
        <HeroSectionStyled>
            <h1>LITE TECHNOLOGY</h1>
            <p>
                Desenvolimento, design e criatividade para o seu negócio
                crescer.
            </p>

            <ContainerSkillsStyled>
                <SkillStyled>
                    <IoDiamond />
                    <p>Qualidade</p>
                </SkillStyled>
                <SkillStyled>
                    <RayIconSvg />
                    <p>Agilidade</p>
                </SkillStyled>
                <SkillStyled>
                    <TbArrowsRandom />
                    <p>Customizado para cada cliente</p>
                </SkillStyled>
            </ContainerSkillsStyled>
        </HeroSectionStyled>
    );
};
