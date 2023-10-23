import { LetteringLogo, ShortTextInput, ExternalLink } from "../../components/micro";
import {
    LinkBlueLightStyled,
    ButtonBlueLightStyled,
    FloatingHeaderStyled,
    FormStyled,
    LegalFooterStyled,
    SectionStyled,
} from "../../components/styled";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

const LandingPage = () => {
    return (
        <>
            <FloatingHeaderStyled>
                <LetteringLogo to={"/"} />

                <LinkBlueLightStyled to={"#contact"}>
                    Contato
                </LinkBlueLightStyled>
            </FloatingHeaderStyled>

            <SectionStyled>
                <FormStyled onSubmit={(event) => event.preventDefault()} noValidate>
                    <ShortTextInput
                        describe="nome"
                        name="name"
                        placeholder="ex: Jhon Doe"
                        invalidFeedback="O nome deve ter de 2 a 24 caracteres. Somente letras."
                        extraAttributes={{
                            minLength: 2,
                            maxLength: 24,
                            pattern: "^([a-zA-ZÀ-ÿ ]){2,24}$",
                            required: true,
                        }}
                    />
                    <ShortTextInput
                        describe="e-mail"
                        type="email"
                        name="email"
                        placeholder="ex: jhondoe@example.com"
                        invalidFeedback="O formato de e-mail usado é inválido."
                        extraAttributes={{
                            required: true,
                        }}
                    />
                    <ShortTextInput
                        describe="número de contato"
                        type="tel"
                        name="tel"
                        placeholder="ex: (12) 12345-6789"
                        invalidFeedback="O formato do telefone usado não é conhecido."
                        extraAttributes={{
                            required: true,
                        }}
                    />

                    <ButtonBlueLightStyled type="submit">
                        Enviar
                    </ButtonBlueLightStyled>
                </FormStyled>
            </SectionStyled>

            <LegalFooterStyled>
                <ExternalLink href="https://www.instagram.com/litetechnology/">
                    <AiFillInstagram /> Instagram
                </ExternalLink>
                <ExternalLink href="https://github.com/lite-technology">
                    <AiFillGithub /> GitHub
                </ExternalLink>
            </LegalFooterStyled>
        </>
    );
};

export default LandingPage;
