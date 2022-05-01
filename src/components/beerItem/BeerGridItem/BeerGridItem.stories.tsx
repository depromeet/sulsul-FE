import { ComponentMeta, ComponentStory } from '@storybook/react';
import BeerGridItem from './BeerGridItem';

export default {
  title: 'Components/BeerGridItem',
  component: BeerGridItem,
  argTypes: {
    isLiked: { control: 'radio', options: [true, false] },
    feel: { control: 'radio', options: [5, 4, 3, 2, 1, null] },
  },
} as ComponentMeta<typeof BeerGridItem>;

const Template: ComponentStory<typeof BeerGridItem> = (args) => <BeerGridItem {...args} />;

export const DefaultBeerGridItem = Template.bind({});
DefaultBeerGridItem.args = {
  name: '삿포로',
  imageUrl: 'https://ifh.cc/g/X6B8Ra.png',
  feel: 5,
  isLiked: false,
};
