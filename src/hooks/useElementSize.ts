import { useRef, useState, useEffect, RefObject, useCallback } from 'react';
import { debounce as _debounce } from 'lodash';

const DEBOUNCE_WAIT_TIME = 300;

interface useElementSizeOptions {
  debounce?: boolean;
}

export const useElementSize = <T extends HTMLElement>(
  option?: useElementSizeOptions,
): {
  ref: RefObject<T>;
  size: { width: number; height: number } | null;
} => {
  const ref = useRef<T>(null);
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  const callback: ResizeObserverCallback = useCallback((entries) => {
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

    const debouncedCallback = _debounce(callback, DEBOUNCE_WAIT_TIME);
    const resizeObserver = new ResizeObserver(option?.debounce ? debouncedCallback : callback);

    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [ref]);

  return { ref, size };
};
