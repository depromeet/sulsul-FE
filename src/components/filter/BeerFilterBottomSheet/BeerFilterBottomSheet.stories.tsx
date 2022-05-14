import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerFilterBottomSheet from './BeerFilterBottomSheet';

export default {
  title: 'Components/BeerFilterBottomSheet',
  component: BeerFilterBottomSheet,
  argTypes: {
    open: { control: 'boolean', defaultValue: true },
    onClose: { control: 'readonly' },
    onApplyClick: { control: 'readonly' },
  },
} as ComponentMeta<typeof BeerFilterBottomSheet>;

const Template: ComponentStory<typeof BeerFilterBottomSheet> = (args) => {
  return <BeerFilterBottomSheet {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
