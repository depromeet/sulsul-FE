import { ComponentStory, ComponentMeta } from '@storybook/react';

import FilterFooter from './FilterFooter';

export default {
  title: 'Components/FilterFooter',
  component: FilterFooter,
} as ComponentMeta<typeof FilterFooter>;

const Template: ComponentStory<typeof FilterFooter> = (args) => <FilterFooter {...args} />;

export const Default = Template.bind({});
Default.args = {};
