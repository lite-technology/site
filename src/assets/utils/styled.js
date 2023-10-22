export const getColorFromStyled = (property, context = 'palette') => {
    return ({ theme }) => {
        return theme[context][property];
    };
};
