import { ComponentStory, ComponentMeta } from '@storybook/react';

import Sample from './Sample';

export default {
  title: 'Components/Sample',
  component: Sample,
} as ComponentMeta<typeof Sample>;

const Template: ComponentStory<typeof Sample> = (args) => <Sample {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  text: 'Button',
};

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  text: 'Button',
};
