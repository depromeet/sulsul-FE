import { BestIcon, GoodIcon, SosoIcon, BadIcon, ChaosIcon } from '@/assets/icon';

const getEmoji = (feel: number) => {
  switch (feel) {
    case 1:
      return <ChaosIcon />;
    case 2:
      return <BadIcon />;
    case 3:
      return <SosoIcon />;
    case 4:
      return <GoodIcon />;
    case 5:
      return <BestIcon />;
    default:
      return undefined;
  }
};

export default getEmoji;
