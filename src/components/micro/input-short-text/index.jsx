import LabelStyled from "./label";
import InputGroupStyled from "./input-group";
import InputStyled from "./styled-input";

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
