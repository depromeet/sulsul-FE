import BeerGridItem from './BeerGridItem';

export default {
  title: 'Components/BeerGridItem',
  component: 'BeerGridItem',
};

const BeerList = [
  {
    beer: {
      id: 1,
      name: '삿포로',
      imageUrl: 'https://ifh.cc/g/X6B8Ra.png',
      feel: 5,
      isLiked: false,
    },
  },
];

export const DefaultBeerGridItem = () => {
  return <BeerGridItem beer={BeerList[0].beer} />;
};
