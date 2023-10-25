export default [
    {
        describe: "nome",
        name: "name",
        placeholder: "ex: Jhon Doe",
        invalidFeedback:
            "O nome deve ter de 2 a 24 caracteres. Somente letras.",
        required: true,
        extraAttributes: {
            minLength: 2,
            maxLength: 24,
            pattern: "^([a-zA-ZÀ-ÿ ]){2,24}$",
        },
    },
    {
        describe: "e-mail",
        type: "email",
        name: "email",
        placeholder: "ex: jhondoe@example.com",
        invalidFeedback: "O formato de e-mail usado é inválido.",
        required: true,
    },
    {
        describe: "número para contato",
        type: "text",
        name: "tel",
        placeholder: "ex: 55 12 123456789",
        invalidFeedback:
            "Use somente números. Informe o DDD. Comprimento de 10 a 16 caracteres (padrão brasileiro).",
        extraAttributes: {
            pattern: "^([0-9][0-9 ]{8,14}[0-9])$",
        },
    },
];
