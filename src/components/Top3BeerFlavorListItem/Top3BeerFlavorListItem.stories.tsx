import { ComponentStory, ComponentMeta } from '@storybook/react';

import Top3BeerFlavorListItem from './Top3BeerFlavorListItem';

export default {
  title: 'Components/Top3BeerFlavorListItem',
  component: Top3BeerFlavorListItem,
  argTypes: {
    text: { control: 'text' },
    likeCount: { control: 'text' },
  },
  args: {
    text: '목넘김이 부드러워요',
    likeCount: 12,
  },
} as ComponentMeta<typeof Top3BeerFlavorListItem>;

const Template: ComponentStory<typeof Top3BeerFlavorListItem> = ({ ...args }) => (
  <Top3BeerFlavorListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {};
