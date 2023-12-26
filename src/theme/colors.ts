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

  gradient1: 'linear-gradient(225deg, #F9D423 14.89%, #FF4E50 85.85%)',
  gradient2: 'linear-gradient(52deg, #fe4e50 -11.18%, #ffac7d 58.92%, #a9c4f3 98.44%)',

  accent1: '#FF4E50',
}

export const darkTheme = {
  ...commonTheme,

  bg1: '#0B0B0F',
  bg2: '#1A1B23',

  neutral1: colors.neutral1_dark,
  neutral2: colors.neutral2_dark,
}
