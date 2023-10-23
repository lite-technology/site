import { LongTextInput, ShortTextInput } from "../../micro";
import { ButtonBlueLightStyled, FormStyled } from "../../styled";

export default () => {
    return (
        <FormStyled
            id="contact"
            onSubmit={(event) => event.preventDefault()}
            noValidate
        >
            <h4>Contato</h4>

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
                describe="número para contato"
                type="text"
                name="tel"
                placeholder="ex: 55 12 123456789"
                invalidFeedback="Use somente números. ex: 55 12 123456789"
                extraAttributes={{
                    pattern: "^([0-9][0-9 ]{8,14}[0-9])$",
                    required: true,
                }}
            />
            <LongTextInput
                describe="mensagem"
                name="message"
                placeholder="Como podemos te ajudar?"
                invalidFeedback="Seja objetivo, nós entraremos em contato. Use de 10 a 500 caracteres."
                extraAttributes={{
                    minLength: 10,
                    maxLength: 500,
                    pattern: "^([a-zA-Z0-9À-ÿ ]){10,500}$",
                    required: true,
                }}
            />

            <ButtonBlueLightStyled type="submit">Enviar</ButtonBlueLightStyled>
        </FormStyled>
    );
};
