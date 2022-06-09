import { NextPage } from 'next';

import TeamContainer from '@/containers/TeamContainer';
import { useGtagPageView } from '@/hooks';

const TeamPage: NextPage = () => {
  useGtagPageView('팀원 소개');

  return <TeamContainer />;
};

export default TeamPage;
