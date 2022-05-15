import { ComponentStory, ComponentMeta } from '@storybook/react';

import FilterChipList from './FilterChipList';

export default {
  title: 'Components/FilterChipList',
  component: FilterChipList,
} as ComponentMeta<typeof FilterChipList>;

const Template: ComponentStory<typeof FilterChipList> = (args) => <FilterChipList {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentFilterValues: ['아시아', '필스너', 'IPA', '페일에일'],
};
