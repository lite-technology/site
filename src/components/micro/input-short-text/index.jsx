import { LabelStyled } from "./styled-label";
import { InputGroupStyled } from "./styled-input-group";
import { InputStyled, TextareaStyled } from "./styled-input";

export const ShortTextInput = (props) => {
    const {
        describe,
        type,
        name,
        placeholder,
        invalidFeedback,
        required = false,
        extraAttributes = {},
    } = props;

    return (
        <LabelStyled>
            <div>
                {describe} {required && <sub>(obrigatório*)</sub>}
            </div>

            <InputGroupStyled>
                <InputStyled
                    type={type || "text"}
                    name={name}
                    autoSave="off"
                    autoComplete="off"
                    placeholder={placeholder}
                    required={required}
                    {...extraAttributes}
                />

                <div className="invalid-feedback">
                    {invalidFeedback || "Falha na validação deste campo."}
                </div>
            </InputGroupStyled>
        </LabelStyled>
    );
};

export const LongTextInput = (props) => {
    const {
        describe,
        name,
        placeholder,
        invalidFeedback,
        required = false,
        extraAttributes = {},
    } = props;

    return (
        <LabelStyled>
            <div>
                {describe} {required && <sub>(obrigatório*)</sub>}
            </div>

            <InputGroupStyled>
                <TextareaStyled
                    describe={describe}
                    name={name}
                    placeholder={placeholder}
                    rows={5}
                    required={required}
                    {...extraAttributes}
                />

                <div className="invalid-feedback">
                    {invalidFeedback || "Falha na validação deste campo."}
                </div>
            </InputGroupStyled>
        </LabelStyled>
    );
};
