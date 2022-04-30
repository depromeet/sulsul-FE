import { useRef, useState, useEffect, RefObject } from 'react';

export const useElementSize = <T extends HTMLElement>(): {
  ref: RefObject<T>;
  size: { width: number; height: number } | null;
} => {
  const ref = useRef<T>(null);
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    setSize({
      width: ref.current.clientWidth,
      height: ref.current.clientHeight,
    });
  }, [ref.current?.clientWidth, ref.current?.clientHeight]);

  return { ref, size };
};
