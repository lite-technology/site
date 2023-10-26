import { SectionStyled } from "./styled-body";

export const BodySection = (props) => {
    const { code } = props;
    let selectedError = {};

    switch (code) {
        case 400:
            selectedError = {
                code: 400,
                error: "Bad Request",
                describe: "Erro nos dados da requisição.",
            };
            break;
        case 404:
            selectedError = {
                code: 404,
                error: "Not found",
                describe: "Página não encontrada.",
            };
            break;
        default:
            selectedError = {
                code: 500,
                error: "Internal Server Error",
                describe: "Erro não controlado.",
            };
            break;
    }

    return (
        <SectionStyled>
            <p>
                <strong>Código:</strong> <span>{selectedError.code}</span>
            </p>
            <p>
                <strong>Erro:</strong> <span>{selectedError.error}</span>
            </p>
            <p>
                <strong>Descrição:</strong>{" "}
                <span>{selectedError.describe}</span>
            </p>
        </SectionStyled>
    );
};
