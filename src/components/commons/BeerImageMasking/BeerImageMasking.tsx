import styled from '@emotion/styled';
import { ReactNode } from 'react';
import type { PropsWithChildren } from 'react';

interface Props {
  width?: string;
  children?: ReactNode;
}

const BeerImageMasking = (props: PropsWithChildren<Props>) => {
  const { width, children, ...rest } = props;
  return (
    <StyledBeerImageMasking width={width} {...rest}>
      {children}
    </StyledBeerImageMasking>
  );
};

export default BeerImageMasking;

// NOTE: 마스킹 참고 : https://www.w3schools.com/css/css3_masking.asp
const StyledBeerImageMasking = styled.div<Props>`
  width: ${(p) => p.width};
  aspect-ratio: 17 / 40;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-mask-box-image: url('https://ifh.cc/g/lCaosK.png');
  mask-image: url('https://ifh.cc/g/lCaosK.png');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
`;
