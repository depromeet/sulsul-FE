import { ComponentMeta, ComponentStory } from '@storybook/react';
import BeerGridItem from './BeerGridItem';

export default {
  title: 'Components/BeerGridItem',
  component: BeerGridItem,
} as ComponentMeta<typeof BeerGridItem>;

const Template: ComponentStory<typeof BeerGridItem> = (args) => <BeerGridItem {...args} />;

const BeerList = [
  {
    beer: {
      id: 1,
      name: '삿포로',
      imageUrl: 'https://ifh.cc/g/X6B8Ra.png',
      feel: null,
      isLiked: false,
    },
  },
];

export const LikedBeerGridItem = Template.bind({});
LikedBeerGridItem.args = {
  beer: { ...BeerList[0].beer, feel: 5 },
};

export const DefaultBeerGridItem = Template.bind({});
DefaultBeerGridItem.args = {
  beer: { ...BeerList[0].beer },
};
