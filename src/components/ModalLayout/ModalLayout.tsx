import React, { ReactNode, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

const StyledContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  max-width: 768px;
  height: 100vh;

  overflow: hidden;

  ${(p) => !p.open && 'pointer-events: none;'}
`;

export const fadeIn = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity:1;
  }

  to {
    opacity:0;
  }
`;

const StyledDim = styled.div<{ open: boolean }>`
  width: 100%;
  height: 100%;

  background-color: rgba(51, 51, 51, 0.8);

  ${(p) =>
    css`
      animation: ${p.open ? fadeIn : fadeOut} 0.3s forwards;
    `}
`;

interface ModalLayoutProps {
  open: boolean;
  children?: ReactNode;
  onClose?: VoidFunction;
}

const ModalLayout: React.FC<ModalLayoutProps> = ({ open, children, onClose }) => {
  const [isVisible, setIsVisible] = useState<boolean>(open);

  /** 애니메이션이 끝난 후에 모달이 안보이도록 하기 위함 */
  useEffect(() => {
    if (open && !isVisible) {
      setIsVisible(true);
      return;
    }

    let timerId: NodeJS.Timeout;

    if (!open && isVisible) {
      timerId = setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }

    () => clearTimeout(timerId);
  }, [open, isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <StyledContainer open={open}>
      <StyledDim open={open} onClick={onClose} />
      {children}
    </StyledContainer>
  );
};

export default ModalLayout;
