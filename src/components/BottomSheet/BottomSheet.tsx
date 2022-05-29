import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

import ModalLayout from '../layouts/ModalLayout';

import { useElementSize } from '@/hooks/useElementSize';

const showUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const hideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

interface StyledWrapperProps extends Pick<BottomSheetProps, 'open' | 'isFull' | 'backgroundColor'> {
  height?: number;
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  ${(p) => (p.isFull ? 'height: 90vh;' : '')};
  max-height: 90vh;
  border-radius: 2rem 2rem 0 0;

  background-color: ${(p) => p.backgroundColor};

  overflow: hidden;

  transform: ${(p) => (p.open ? `translateY(0)` : `translateY(100%)`)};

  ${(p) =>
    css`
      animation: ${p.open ? showUp : hideDown} 0.3s forwards;
    `};
`;

const DEFAULT_BACKGROUND_COLOR = '#222222';

interface BottomSheetProps {
  open: boolean;
  children: ReactNode;
  onClose?: VoidFunction;
  /** 화면의 90%를 차지하는 바텀시트임의 여부 (default: false) */
  isFull?: boolean;
  /** 백그라운드 색상 (default: #222222) */
  backgroundColor?: string;
  className?: string;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  open,
  children,
  onClose,
  isFull = false,
  backgroundColor = DEFAULT_BACKGROUND_COLOR,
  className,
}) => {
  const { ref, size } = useElementSize<HTMLDivElement>({
    debounce: true,
  });

  return (
    <ModalLayout open={open} onClose={onClose}>
      <StyledWrapper
        ref={ref}
        open={open}
        height={size?.height}
        isFull={isFull}
        backgroundColor={backgroundColor}
        aria-modal="true"
        className={className}
      >
        {children}
      </StyledWrapper>
    </ModalLayout>
  );
};

export default BottomSheet;
