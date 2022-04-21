import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const global = css`
  ${emotionReset}

  body {
    // https://github.com/orioncactus/pretendard
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
      'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }
`;

const GlobalStyle = () => <Global styles={global} />;

export default GlobalStyle;
