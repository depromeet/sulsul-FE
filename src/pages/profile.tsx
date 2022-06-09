import { NextPage } from 'next';

import ProfileContainer from '@/containers/ProfileContainer';
import { useGtagPageView } from '@/hooks';

const dummy = [
  {
    nickname: '호딩',
    email: 'gywls00100@gmail.com',
    drankBeerCount: 0,
    ticketCount: 0,
    travelCount: 0,
    likedBeerCount: 0,
    requestBeerCount: 0,
  },
];
const ProfilePage: NextPage = () => {
  useGtagPageView('프로필');

  const {
    nickname,
    email,
    drankBeerCount,
    ticketCount,
    travelCount,
    likedBeerCount,
    requestBeerCount,
  } = dummy[0];

  return (
    <ProfileContainer
      nickname={nickname}
      email={email}
      drankBeerCount={drankBeerCount}
      ticketCount={ticketCount}
      travelCount={travelCount}
      likedBeerCount={likedBeerCount}
      requestBeerCount={requestBeerCount}
    />
  );
};

export default ProfilePage;
