const general = {
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
        border: general.dark100,
        text: general.light100,
        background: general.dark300,
        cardBackground: general.dark200,
    },
};

export const light = {
    theme: 'light',

    colors: {
        border: general.light300,
        text: general.dark300,
        background: general.light100,
        cardBackground: general.light100,
    },
};
