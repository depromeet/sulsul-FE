import type { NextPage } from 'next';

import { useGtagPageView } from '@/hooks';

const Home: NextPage = () => {
  useGtagPageView('홈');

  return <div>sulsul</div>;
};

export default Home;
