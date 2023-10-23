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
        extraAttributes = {},
    } = props;

    return (
        <LabelStyled>
            <div>{describe}</div>

            <InputGroupStyled>
                <InputStyled
                    type={type || "text"}
                    name={name}
                    autoSave="off"
                    autoComplete="off"
                    placeholder={placeholder}
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
        extraAttributes = {},
    } = props;

    return (
        <LabelStyled>
            <div>{describe}</div>

            <InputGroupStyled>
                <TextareaStyled
                    describe={describe}
                    name={name}
                    placeholder={placeholder}
                    rows={5}
                    {...extraAttributes}
                />

                <div className="invalid-feedback">
                    {invalidFeedback || "Falha na validação deste campo."}
                </div>
            </InputGroupStyled>
        </LabelStyled>
    );
};
