import styled from '@emotion/styled';
import { ForwardedRef, forwardRef } from 'react';

import Icon from '@/components/commons/Icon';

const LoadingIcon = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <StyledLoadingIcon ref={ref}>
      <Icon name="AirPlaneLoading" size={40} />
    </StyledLoadingIcon>
  );
});

export default LoadingIcon;

LoadingIcon.displayName = 'LoadingIcon';

const StyledLoadingIcon = styled.div`
  & > svg {
    margin: 50px auto;
  }
`;
