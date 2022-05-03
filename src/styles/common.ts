import { css } from '@emotion/react';

/** @note 요소의 width가 존재해야 올바르게 동작합니다. */
export const ellipsis = (lineCount: number = 1) => css`
  text-overflow: ellipsis;
  overflow: hidden;
  ${lineCount === 1
    ? 'white-space: nowrap;'
    : `
      word-break: break-word;
      display: -webkit-box;
      -webkit-line-clamp: ${lineCount}; 
      -webkit-box-orient: vertical;
      `};
`;
