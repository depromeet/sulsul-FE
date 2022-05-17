import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import { Cloud, Logo } from '@/assets/icon';
import Button from '@/components/commons/Button';

const StyledWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;

  padding-top: 14px;

  /** 아이폰 상단 노치 영역 대응 */
  @supports (padding-top: calc(env(safe-area-inset-top) + 14px)) {
    padding-top: calc(env(safe-area-inset-top) + 14px);
  }

  .logo {
    width: 80px;
    height: 18px;
    margin: 0 auto;
  }

  .cloud {
    position: absolute;
    bottom: 0;
    width: 100%;
    fill: ${(p) => p.theme.color.white};
  }
`;

const StyledCol = styled.div`
  position: absolute;
  bottom: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: auto;
  z-index: 1;

  > img {
    height: 35vh;
    min-width: 280px;
    max-width: 375px;
    margin-bottom: 4vh;
    object-fit: contain;
  }

  > p {
    ${(p) => p.theme.fonts.Body5};
    color: ${(p) => p.theme.color.whiteOpacity80};
    white-space: pre-wrap;
    text-align: center;
  }

  > b {
    ${(p) => p.theme.fonts.SubTitle3};
    color: ${(p) => p.theme.color.white};
    margin: 5vh 0;
  }
`;

const OnBoardingContainer = () => {
  const router = useRouter();

  const goToSignIn = () => {
    router.push('/signin');
  };

  return (
    <StyledWrapper>
      <Logo className="logo" />
      <StyledCol>
        <img src="images/onboarding-hero.png" alt="" />
        <p>세계 맥주, 어디까지 마셔봤나요?{'\n'}Beer Air와 함께 세계 맥주를 정복해보세요!</p>
        <b>맥주로 떠나는 세계 여행</b>
        <Button type="primary" width="244px" onClick={goToSignIn}>
          시작하기
        </Button>
      </StyledCol>
      <Cloud className="cloud" />
    </StyledWrapper>
  );
};

export default OnBoardingContainer;
