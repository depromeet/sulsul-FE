import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerListFilterBottomSheet from './BeerListFilterBottomSheet';

export default {
  title: 'Components/BeerListFilterBottomSheet',
  component: BeerListFilterBottomSheet,
  argTypes: {
    open: { control: 'boolean', defaultValue: true },
    onClose: { control: 'readonly' },
    onApplyClick: { control: 'readonly' },
  },
} as ComponentMeta<typeof BeerListFilterBottomSheet>;

const Template: ComponentStory<typeof BeerListFilterBottomSheet> = (args) => {
  return <BeerListFilterBottomSheet {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
