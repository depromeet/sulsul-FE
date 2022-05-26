import styled from '@emotion/styled';

import Header, { HEADER_HEIGHT } from '@/components/Header';
import { BackButton } from '@/components/Header/extras';

const EtcContainer = () => {
  return (
    <StyledEtcContainer>
      <Header leftExtras={<BackButton />}>기타</Header>
      <ListRowContainer>
        <ListRow>
          <a href="mailto:gywls00100@gmail.com" target="_blank" rel="noreferrer">
            문의하기
          </a>
        </ListRow>
        <ListRow>
          <a>이용약관</a>
        </ListRow>
        <ListRow>
          <a>개인정보 처리방침</a>
        </ListRow>
        <ListRow>
          <a>팀원 소개</a>
        </ListRow>
        <ListRow>
          <a onClick={() => alert('로그아웃')}>로그아웃</a>
        </ListRow>
        <Withdrawal>
          <a>회원탈퇴</a>
        </Withdrawal>
      </ListRowContainer>
    </StyledEtcContainer>
  );
};

export default EtcContainer;

const StyledEtcContainer = styled.div``;

const ListRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  padding: 0 20px;
`;
const ListRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 58px;
  border-bottom: 1px solid ${({ theme }) => theme.color.whiteOpacity35};

  a {
    ${({ theme }) => theme.fonts.SubTitle4};
    color: ${({ theme }) => theme.color.white};
    margin-left: 10px;
    cursor: pointer;
  }
`;

const Withdrawal = styled(ListRow)`
  border: none;
  margin-top: auto;
  a {
    ${({ theme }) => theme.fonts.SubTitle4};
    color: ${({ theme }) => theme.color.whiteOpacity50};
  }
`;
