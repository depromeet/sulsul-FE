import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerDetailPage from './BeerDetailPage';

export default {
  title: 'Pages/BeerDetailPage',
  component: BeerDetailPage,
  args: {},
} as ComponentMeta<typeof BeerDetailPage>;

const Template: ComponentStory<typeof BeerDetailPage> = (args) => <BeerDetailPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  beer: {
    country: {
      id: 1,
      name: '한국',
      continent: {
        id: 1,
        name: '아시아',
      },
    },
    type: '위트 에일',
    name: '제주 위트 에일',
    nameEng: 'Jeju Wit Ale',
    imageUrl: 'https://ifh.cc/g/X6B8Ra.png',
    alcohol: 5.5,
    price: 4200,
    volume: 50,
    isLiked: false,
  },
  backgroundImageUrl: 'https://ifh.cc/g/PsFadM.jpg',
  airPort: {
    departureKor: '한국',
    departureEng: 'KOR',
    destinationKor: '미쿡',
    destinationEng: 'USA',
  },
};
