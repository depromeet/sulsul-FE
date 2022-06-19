import styled from '@emotion/styled';

const NoRecord = () => {
  return (
    <StyledNoRecord>
      발행된 티켓이 없네요.
      <br />
      <br />
      맥주 여행을 기록하고
      <br />
      새로운 티켓을 간직해 보세요!
    </StyledNoRecord>
  );
};

export default NoRecord;

const StyledNoRecord = styled.div`
  ${({ theme }) => theme.fonts.Body5};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 390px;
  color: ${({ theme }) => theme.color.whiteOpacity80};
  background-color: ${({ theme }) => theme.color.whiteOpacity20};
  border: 1px dashed #ffffff;
  border-radius: 16px;
  text-align: center;
  margin: 0 auto;
`;
