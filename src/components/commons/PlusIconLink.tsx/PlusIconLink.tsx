import styled from '@emotion/styled';

import Icon from '@/components/commons/Icon';

export default function PlusIconLink() {
  return (
    <StyledPlusIconLink>
      <Icon name="Plus" size={14} />
    </StyledPlusIconLink>
  );
}

const StyledPlusIconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.semanticColor.primary};
  cursor: pointer;
`;
