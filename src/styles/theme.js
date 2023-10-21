export const palette = {
    blue200: '#0047ff',
    light100: '#ffffff',
    light200: '#eeeeee',
    light300: '#bbbbbb',
    gray100: '#888888',
    dark100: '#242424',
    dark200: '#141414',
    dark300: '#0e0e0e',
};

export const dark = {
    theme: 'dark',

    colors: {
        border: palette.dark100,
        text: palette.light100,
        background: palette.dark300,
        cardBackground: palette.dark200,
    },
};

export const light = {
    theme: 'light',

    colors: {
        border: palette.light300,
        text: palette.dark300,
        background: palette.light100,
        cardBackground: palette.light100,
    },
};
