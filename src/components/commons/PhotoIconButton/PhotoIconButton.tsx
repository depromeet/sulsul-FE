import styled from '@emotion/styled';

import Icon from '@/components/commons/Icon';

const PhotoIconButton = () => {
  return (
    <StyledPhotoIconButton>
      <Icon name="Photo" size={30} color="white" />
    </StyledPhotoIconButton>
  );
};

export default PhotoIconButton;

const StyledPhotoIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.whiteOpacity20};
`;
