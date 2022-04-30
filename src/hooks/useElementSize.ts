import { useRef, useState, useEffect, RefObject } from 'react';

export const useElementSize = <T extends HTMLElement>(): {
  ref: RefObject<T>;
  size: { width: number; height: number } | null;
} => {
  const ref = useRef<T>(null);
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry.contentRect) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [ref]);

  return { ref, size };
};
