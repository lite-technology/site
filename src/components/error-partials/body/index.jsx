import { SectionStyled } from "./styled-body";

export const BodySection = () => {
    return (
        <SectionStyled>
            <p>
                <strong>Código:</strong> <span>500</span>
            </p>
            <p>
                <strong>Erro:</strong> <span>Internal Server Error</span>
            </p>
            <p>
                <strong>Descrição:</strong>{" "}
                <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
            </p>
        </SectionStyled>
    );
};
