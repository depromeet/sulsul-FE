const memoize = (fn: any) => {
  const cache: any = {};
  return (...args: any) => {
    const n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

// ignore in-browser next/js recoil warnings until its fixed.
const mutedConsole = memoize((console: any) => ({
  ...console,
  warn: (...args: any) => (args[0].includes('Duplicate atom key') ? null : console.warn(...args)),
}));

export default mutedConsole;
