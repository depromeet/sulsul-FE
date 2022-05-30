import styled from '@emotion/styled';

import Icon from '@/components/commons/Icon-new';

export default function PlusIconButton() {
  return (
    <StyledPlusIconButton>
      <Icon name="Plus" size={14} />
    </StyledPlusIconButton>
  );
}

const StyledPlusIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.semanticColor.primary};
`;
