import { lighten, darken } from 'polished';

const black = '#000';
const white = '#fff';
const main = '#eaeaea';

const colors = {
    black,
    white,
    main,
    red: '#fb6262',
    background: '#fbfbfb',
    mainLight: lighten(0.99, main),
    mainDark: darken(0.45, main),
    mainDarker: darken(0.4, main),
};

const fontsSize = {
    md: '14px',
    lg: '16px',
    xl: '18px',
    '2xl': '20px',
};

export const theme = {
    colors,
    fontsSize,
};
