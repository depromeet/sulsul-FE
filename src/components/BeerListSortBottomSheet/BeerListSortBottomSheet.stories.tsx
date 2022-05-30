import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerListSortBottomSheet from './BeerListSortBottomSheet';

export default {
  title: 'Components/BeerListSortBottomSheet',
  component: BeerListSortBottomSheet,
  args: {
    open: true,
  },
} as ComponentMeta<typeof BeerListSortBottomSheet>;

const Template: ComponentStory<typeof BeerListSortBottomSheet> = (args) => (
  <BeerListSortBottomSheet {...args} />
);

export const Default = Template.bind({});
