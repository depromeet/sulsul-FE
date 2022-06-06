import styled from '@emotion/styled';

import Icon from '@/components/commons/Icon';

const HomeIconButton = () => {
  return (
    <StyledHomeIconButton>
      <Icon name="Home" size={30} color="blue" />
    </StyledHomeIconButton>
  );
};

export default HomeIconButton;

const StyledHomeIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
`;
