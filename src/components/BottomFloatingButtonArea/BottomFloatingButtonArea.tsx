import Link from 'next/link';
import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';

import HomeIconButton from '@/components/commons/HomeIconButton';

const BOTTOM_FLOATING_BUTTON_AREA_HEIGHT = 100;

interface Props extends HTMLAttributes<HTMLDivElement> {
  button?: React.ReactNode;
  withHomeButton?: boolean;
  isOnlyHomeButton?: boolean;
  className?: string;
  children?: React.ReactNode;
  bottomOffset?: number;
}

const BottomFloatingButtonArea = (props: Props) => {
  const {
    button,
    withHomeButton = false,
    isOnlyHomeButton = false,
    className,
    bottomOffset = 0,
    children,
  } = props;

  return (
    <>
      <div style={{ width: '100%', height: `${BOTTOM_FLOATING_BUTTON_AREA_HEIGHT}px` }} />
      <StyledBottomFloatingButton className={className} bottomOffset={bottomOffset}>
        {children}
        {!isOnlyHomeButton && button}
        {withHomeButton && (
          <Link href="/">
            <a>
              <HomeIconButton />
            </a>
          </Link>
        )}
      </StyledBottomFloatingButton>
    </>
  );
};

export default BottomFloatingButtonArea;

const StyledBottomFloatingButton = styled.div<{ bottomOffset: number }>`
  position: fixed;
  bottom: ${({ bottomOffset }) => bottomOffset}px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  width: 100%;
  height: ${BOTTOM_FLOATING_BUTTON_AREA_HEIGHT}px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 40.1%);
  z-index: 1;
`;
