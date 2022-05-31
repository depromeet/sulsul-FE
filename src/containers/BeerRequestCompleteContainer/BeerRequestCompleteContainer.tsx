import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import Icon from '@/components/commons/Icon';
import Button from '@/components/commons/Button';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 10vh 0;

  > b {
    margin: 34px 0 0;
    ${(p) => p.theme.fonts.H3};
  }

  > p {
    margin: 26px 0 auto;
    white-space: pre-line;
    ${(p) => p.theme.fonts.Body3};
    text-align: center;
  }

  > button {
    margin: 16px 0 0;
  }
`;

const BeerRequestCompleteContainer = () => {
  const router = useRouter();
  const goToHome = () => router.push('/');
  /** @todo */
  const goToRecordCreatePage = () => null;

  return (
    <StyledWrapper>
      <Icon name="Film" size={244} />
      <b>요청 완료되었습니다</b>
      <p>조금만 기다려주세요!{'\n'}관리자 승인 후 14일 이내 등록됩니다.</p>
      <Button width="244px" type="primary" onClick={goToHome}>
        홈으로 돌아가기
      </Button>
      <Button width="244px" type="primary" line onClick={goToRecordCreatePage}>
        방금 등록한 맥주 기록하기
      </Button>
    </StyledWrapper>
  );
};

export default BeerRequestCompleteContainer;
