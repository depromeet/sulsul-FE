import { RefObject, useCallback, useEffect, useState } from 'react';

export const useModalLayoutVisible = <T extends HTMLElement>(
  open: boolean,
  dimRef: RefObject<T>,
) => {
  const [isVisible, setIsVisible] = useState<boolean>(open);

  useEffect(() => {
    open && !isVisible && setIsVisible(true);
  }, [open, isVisible]);

  const handleAnimationend = useCallback(() => {
    !open && isVisible && setIsVisible(false);
  }, [open, isVisible]);

  /** 애니메이션이 끝난 후에 모달이 안보이도록 함 */
  useEffect(() => {
    let divRefValue: T | null = null;

    if (dimRef.current) {
      divRefValue = dimRef.current;
      divRefValue.addEventListener('animationend', handleAnimationend);
    }

    return () => {
      divRefValue && divRefValue.removeEventListener('animationend', handleAnimationend);
    };
  }, [dimRef, handleAnimationend]);

  return isVisible;
};
