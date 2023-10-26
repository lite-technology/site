export const getThemeProperty = (property, context = 'palette') => {
    return ({ theme }) => {
        return theme[context][property];
    };
};
