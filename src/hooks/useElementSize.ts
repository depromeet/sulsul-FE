import { useRef, useState, useEffect, RefObject } from 'react';

export const useElementSize = (): {
  ref: RefObject<HTMLElement>;
  size: { width: number; height: number } | null;
} => {
  const ref = useRef<HTMLElement>(null);
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
