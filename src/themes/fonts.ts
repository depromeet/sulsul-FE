import { css } from '@emotion/react';

export const fonts = {
  H1: css`
    font-size: 24px;
    font-weight: 700;
    line-height: normal; // NOTE: 디자이너분이 작성해주신 auto를 normal로 설정
    letter-spacing: 0;
  `,
  H2: css`
    font-size: 22px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0;
  `,
  H3: css`
    font-size: 22px;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0em;
  `,
  H4: css`
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0;
  `,
  H5: css`
    font-size: 20px;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.02em;
  `,
  H6: css`
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.02em;
  `,

  SubTitle1: css`
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0;
  `,
  SubTitle2: css`
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0;
  `,
  SubTitle3: css`
    font-size: 16px;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: 0;
  `,
  SubTitle4: css`
    font-size: 15px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0;
  `,
  SubTitle5: css`
    font-size: 13px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.02em;
  `,

  Body1: css`
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.01em;
  `,
  Body2: css`
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.01em;
  `,
  Body3: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.01em;
  `,
  Body4: css`
    font-size: 13px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0;
  `,
  Body5: css`
    font-size: 13px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.02em;
  `,

  SmallBold1: css`
    font-size: 14px;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 0;
  `,
  SmallBold2: css`
    font-size: 12px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.02em;
  `,
  SmallBold3: css`
    font-size: 10px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.02em;
  `,

  Abbr1: css`
    font-size: 36px;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 0;
  `,
  Abbr2: css`
    font-size: 26px;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 0;
  `,
  Abbr3: css`
    font-size: 20px;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 0;
  `,

  BarlowBig: css`
    font-size: 32px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0;
    font-family: 'Barlow Condensed', sans-serif;
  `,
  BarlowSmall: css`
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.02em;
    font-family: 'Barlow Condensed', sans-serif;
  `,
} as const;
