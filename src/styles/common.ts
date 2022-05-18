import { css } from '@emotion/react';

/** @note 요소의 width가 존재해야 올바르게 동작합니다. */
export const ellipsis = (lineCount: number = 1) => css`
  text-overflow: ellipsis;
  overflow: hidden;

  word-break: ${lineCount === 1 ? 'break-all' : 'break-word'};
  display: -webkit-box;
  -webkit-line-clamp: ${lineCount};
  -webkit-box-orient: vertical;
`;

/** @note 스크롤은 동작하나 스크롤 바는 보이지 않습니다.  */
export const hideScrollbar = css`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
`;
