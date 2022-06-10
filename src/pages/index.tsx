import type { NextPage } from 'next';

import { useGtagPageView } from '@/hooks';
import { PAGE_TITLES } from '@/constants';

const Home: NextPage = () => {
  useGtagPageView(PAGE_TITLES.HOME);

  return <div>sulsul</div>;
};

export default Home;
