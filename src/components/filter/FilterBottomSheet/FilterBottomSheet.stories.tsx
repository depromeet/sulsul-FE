import { ComponentStory, ComponentMeta } from '@storybook/react';

import FilterBottomSheet from './FilterBottomSheet';

export default {
  title: 'Components/FilterBottomSheet',
  component: FilterBottomSheet,
  argTypes: {
    open: { control: 'boolean', defaultValue: true },
    onClose: { control: 'readonly' },
    onApplyClick: { control: 'readonly' },
  },
} as ComponentMeta<typeof FilterBottomSheet>;

const Template: ComponentStory<typeof FilterBottomSheet> = (args) => {
  return <FilterBottomSheet {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
