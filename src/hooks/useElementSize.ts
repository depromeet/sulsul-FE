import { useRef, useState, useEffect, RefObject, useCallback } from 'react';
import { debounce as _debounce } from 'lodash';

const DEBOUNCE_WAIT_TIME = 300;

interface useElementSizeOptions {
  debounce?: boolean;
}

export const useElementSize = <T extends HTMLElement>({ debounce }: useElementSizeOptions = {}): {
  ref: RefObject<T>;
  size: { width: number; height: number } | null;
} => {
  const ref = useRef<T>(null);
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  const resizeHandler: ResizeObserverCallback = useCallback((entries) => {
    const entry = entries[0];
    if (entry.contentRect) {
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    }
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    const debouncedResizeHandler = _debounce(resizeHandler, DEBOUNCE_WAIT_TIME);
    const resizeObserver = new ResizeObserver(debounce ? debouncedResizeHandler : resizeHandler);

    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [ref, resizeHandler, debounce]);

  return { ref, size };
};
