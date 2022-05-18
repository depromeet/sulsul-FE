import styled from '@emotion/styled';
import { ReactNode } from 'react';
import type { PropsWithChildren } from 'react';

interface BeerImageMaskingProps {
  width?: string;
  children?: ReactNode;
}

const BeerImageMasking = (props: PropsWithChildren<BeerImageMaskingProps>) => {
  const { width, children, ...rest } = props;
  return (
    <StyledBeerImageMasking width={width} {...rest}>
      {children}
    </StyledBeerImageMasking>
  );
};

export default BeerImageMasking;

// NOTE: 마스킹 참고 : https://www.w3schools.com/css/css3_masking.asp
const StyledBeerImageMasking = styled.div<Pick<BeerImageMaskingProps, 'width'>>`
  width: ${(p) => p.width};
  aspect-ratio: 17 / 40;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-mask-box-image: url('https://ifh.cc/g/lCaosK.png');
  mask-image: url('https://ifh.cc/g/lCaosK.png');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background-color: tomato; // NOTE: 영역 확인을 위해 임시로 추가
`;
