import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { Cloud } from '@/assets/icon';
import Icon from '@/components/commons/Icon';
import { ColorTheme } from '@/themes/types';

interface OnBoardingLayoutProps {
  children: ReactNode;
  title?: string;
  cloudColor?: keyof ColorTheme['color'];
}

const StyledContainer = styled.div<{ cloudColor: OnBoardingLayoutProps['cloudColor'] }>`
  position: relative;

  width: 100%;
  height: 100vh;

  padding: 14px 0 0;

  /** 아이폰 상단 노치 영역 대응 */
  @supports (padding-top: calc(env(safe-area-inset-top) + 14px)) {
    padding-top: calc(env(safe-area-inset-top) + 14px);
  }

  .logo {
    margin: 0 auto;
  }

  .cloud {
    position: absolute;
    bottom: 0;
    width: 100% !important;
    fill: ${(p) => p.theme.color[p.cloudColor || 'white']};
  }
`;

const SlideUp = keyframes`
from {
  transform: translateY(20%);
  opacity: 0;
}
to{
  transform: translateY(0);
  opacity:1;
}
`;

const StyledTitle = styled.h1`
  margin: 7.4rem 3.4rem 0;
  ${(p) => p.theme.fonts.H5};
  white-space: pre-line;

  animation: ${SlideUp} 0.5s forwards;
`;

const StyledWrapper = styled.div`
  position: absolute;
  bottom: 25vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
  z-index: 1;
`;

const OnBoardingLayout = ({ title, children, cloudColor = 'white' }: OnBoardingLayoutProps) => {
  return (
    <StyledContainer cloudColor={cloudColor}>
      <Icon name="Logo" className="logo" size={80} />
      {Boolean(title) && <StyledTitle>{title}</StyledTitle>}
      <StyledWrapper>{children}</StyledWrapper>
      <Cloud className="cloud" aria-hidden={true} />
    </StyledContainer>
  );
};

export default OnBoardingLayout;
