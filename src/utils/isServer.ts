export const isServer = (): boolean => {
  return typeof window === 'undefined';
};

export default isServer;
