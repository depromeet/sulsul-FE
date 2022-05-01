import { css } from '@emotion/react';

export const fonts = {
  mainTitle: css`
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 26px;
  `,

  subTitle: css`
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
  `,

  subTitleEng: css`
    font-size: 1rem;
    font-weight: 400;
    line-height: 17px;
  `,

  contentTitle: css`
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 19px;
  `,

  content: css`
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 16px;
  `,

  //FIXME: 네이밍을 좀 더 제너럴하게 지으면 좋을 것 같아요. 이렇게 지으면 확장할 수 없을 것 같아서..
  beerNameGrid: css`
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 16px;
  `,

  beerNameList: css`
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 19px;
  `,
} as const;
