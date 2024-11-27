
import { css } from 'styled-components'


export const windowSize = {
  xs: 360,
  sm: 480, // for mobile screen
  md: 768, // for tablets
  lt: 1114, // for large tablets
  lg: 1024, // for laptops
  xl: 1440, // for desktop / monitors
  xxl: 1920, // for big screens
}
export const screenSize = {
  xs: '360px', // for small screen mobile
  sm: '480px', // for mobile screen
  md: '768px', // for tablets
  lt: '1114px', // for large tablets
  lg: '1024px', // for laptops
  xl: '1440px', // for desktop / monitors
  xxl: '1920px', // for big screens
}

export const minDevice = {
  xs: `(min-width: ${screenSize.xs})`,
  sm: `(min-width: ${screenSize.sm})`,
  md: `(min-width: ${screenSize.md})`,
  lt: `(min-width: ${screenSize.lt})`,
  lg: `(min-width: ${screenSize.lg})`,
  xl: `(min-width: ${screenSize.xl})`,
  xxl: `(min-width: ${screenSize.xxl})`,
}



export const maxDevice = {
  xs: `(max-width: ${screenSize.xs})`,
  sm: `(max-width: ${screenSize.sm})`,
  md: `(max-width: ${screenSize.md})`,
  lt: `(max-width: ${screenSize.lt})`,
  lg: `(max-width: ${screenSize.lg})`,
  xl: `(max-width: ${screenSize.xl})`,
  xxl: `(max-width: ${screenSize.xxl})`,
}

export const media = {
  xs: (...args) => css`
    @media (max-width: ${screenSize.xs}) {
      ${css(...args)};
    }
  `,
  sm: (...args) => css`
    @media (max-width: ${screenSize.sm}) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (max-width: ${screenSize.md}) {
      ${css(...args)};
    }
  `,
  lt: (...args) => css`
    @media (max-width: ${screenSize.lt}){
      ${css(...args)}
    }`,
  lg: (...args) => css`
    @media (max-width: ${screenSize.lg}) {
      ${css(...args)};
    }
  `,
  xl: (...args) => css`
    @media (max-width: ${screenSize.xl}) {
      ${css(...args)};
    }
  `,
  xxl: (...args) => css`
    @media (max-width: ${screenSize.xxl}) {
      ${css(...args)};
    }
  `,
}

export const minMedia = {
  xs: (...args) => css`
    @media (min-width: ${screenSize.xs}) {
      ${css(...args)};
    }
  `,
  sm: (...args) => css`
    @media (min-width: ${screenSize.sm}) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (min-width: ${screenSize.md}) {
      ${css(...args)};
    }
  `,
  lt: (...args) => css`
    @media (min-width: ${screenSize.lt}) {
      ${css(...args)};
    }
  `,
  lg: (...args) => css`
    @media (min-width: ${screenSize.lg}) {
      ${css(...args)};
    }
  `,
  xl: (...args) => css`
    @media (min-width: ${screenSize.xl}) {
      ${css(...args)};
    }
  `,
  xxl: (...args) => css`
    @media (min-width: ${screenSize.xxl}) {
      ${css(...args)};
    }
  `,
}