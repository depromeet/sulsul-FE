import styled from '@emotion/styled';
import { forwardRef, Ref } from 'react';

import Icon from '@/components/commons/Icon';

interface Props {
  ref: any;
}

const LoadingIcon = ({ ref }: Props) => {
  return (
    <StyledLoadingIcon ref={ref}>
      <Icon name="AirPlaneLoading" size={40} />
    </StyledLoadingIcon>
  );
};

export default LoadingIcon;

const StyledLoadingIcon = styled.div`
  & > svg {
    margin: 50px auto;
  }
`;
