import styled from '@emotion/styled';
import { forwardRef, Ref } from 'react';

import Icon from '@/components/commons/Icon';

const LoadingIcon = (ref: Ref<HTMLDivElement>) => {
  return (
    <StyledLoadingIcon ref={ref}>
      <Icon name="AirPlaneLoading" size={40} />
    </StyledLoadingIcon>
  );
};

export default forwardRef(LoadingIcon);

LoadingIcon.displayName = 'LoadingIcon';

const StyledLoadingIcon = styled.div`
  & > svg {
    margin: 50px auto;
  }
`;
