import { NextPage } from 'next';

import ProfileContainer from '@/containers/ProfileContainer';

const dummy = [
  {
    nickname: '호딩',
    email: 'gywls00100@gmail.com',
    drinkedBeerCount: 0,
    ticketCount: 0,
    travelCount: 0,
    likedBeerCount: 0,
    requestBeerCount: 0,
  },
];
const ProfilePage: NextPage = () => {
  const {
    nickname,
    email,
    drinkedBeerCount,
    ticketCount,
    travelCount,
    likedBeerCount,
    requestBeerCount,
  } = dummy[0];
  return (
    <ProfileContainer
      nickname={nickname}
      email={email}
      drinkedBeerCount={drinkedBeerCount}
      ticketCount={ticketCount}
      travelCount={travelCount}
      likedBeerCount={likedBeerCount}
      requestBeerCount={requestBeerCount}
    />
  );
};

export default ProfilePage;
