import { useForm } from "@formspree/react";
import { AiOutlineLoading } from "react-icons/ai";
import { LongTextInput, ShortTextInput } from "@components/micro";
import { ButtonBlueLightStyled, FormStyled } from "@components/styled";
import shortInputConfig from "./short-input.config";

export default () => {
    const [spreeState, spreeHandleSubmit] = useForm("mzbqndwl");

    async function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const validation = form.checkValidity();

        if (!validation) {
            return form.classList.add("was-validated");
        }

        await spreeHandleSubmit(event).finally(() => {
            form.classList.remove("was-validated");
            form.reset();
        });
    }

    return (
        <FormStyled
            id="contact"
            onSubmit={handleSubmit}
            noValidate
            method="POST"
        >
            <h4>Contato</h4>

            {shortInputConfig.map((config, index) => (
                <ShortTextInput key={index} {...config} />
            ))}

            <LongTextInput
                describe="mensagem"
                name="message"
                placeholder="Como podemos te ajudar?"
                invalidFeedback="Use de 10 a 500 caracteres. Seja objetivo, nós entraremos em contato para mais detalhes."
                required={true}
                extraAttributes={{
                    minLength: 10,
                    maxLength: 500,
                    pattern: "^([a-zA-Z0-9À-ÿ ]){10,500}$",
                }}
            />

            <ButtonBlueLightStyled
                type="submit"
                data-loading={spreeState.submitting}
                disabled={spreeState.submitting}
            >
                Enviar <AiOutlineLoading />
            </ButtonBlueLightStyled>
        </FormStyled>
    );
};
