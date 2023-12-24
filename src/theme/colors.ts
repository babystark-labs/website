// Based mostly on https://github.com/Uniswap/interface/blob/main/src/theme/index.tsx

const colors = {
  white: '#FFFFFF',
  black: '#000000',

  neutral1_dark: '#f7f7f7',
  neutral2_dark: '#898CA9',
}

const commonTheme = {
  white: colors.white,
  black: colors.black,

  gradient1: 'linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%)',
  flatGradient1: 'linear-gradient(225deg, #933FFE 14.89%, #933FFE 85.85%)',

  accent1: '#933FFE',
}

export const darkTheme = {
  ...commonTheme,

  bg1: '#0B0B0F',
  bg2: '#1A1B23',

  neutral1: colors.neutral1_dark,
  neutral2: colors.neutral2_dark,
}
