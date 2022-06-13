import { NextPage } from 'next';

import TeamContainer from '@/containers/TeamContainer';
import { useGtagPageView } from '@/hooks';
import { PAGE_TITLES } from '@/constants';

const TeamPage: NextPage = () => {
  useGtagPageView(PAGE_TITLES.TEAM);

  return <TeamContainer />;
};

export default TeamPage;
