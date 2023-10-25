import { ContainerSkillsStyled, HeroSectionStyled, SkillStyled } from "./styled-hero";
import skillsData from "./skills.data";

const SkillComponent = (props) => {
    const { skill, Icon } = props;

    return (
        <SkillStyled>
            <Icon />
            <p>{skill}</p>
        </SkillStyled>
    );
};

export default () => {
    return (
        <HeroSectionStyled>
            <h1>LITE TECHNOLOGY</h1>
            <p>
                Desenvolvimento, design e criatividade para o seu negócio crescer
            </p>

            <ContainerSkillsStyled>
                {skillsData.map((skill, index) => (
                    <SkillComponent key={index} {...skill} />
                ))}
            </ContainerSkillsStyled>
        </HeroSectionStyled>
    );
};
