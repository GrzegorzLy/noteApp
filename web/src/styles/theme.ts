import { lighten, darken } from 'polished';

const black = '#000';
const white = '#fff';
const main = '#eaeaea';

const colors = {
    black,
    white,
    main,
    mainLight: lighten(0.6, main),
    mainDark: darken(0.45, main),
    mainDarker: darken(0.4, main),
};

const fontsSize = {
    md: '14px',
    lg: '16px',
};

export const theme = {
    colors,
    fontsSize,
};
