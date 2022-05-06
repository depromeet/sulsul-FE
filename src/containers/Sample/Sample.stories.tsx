import { ComponentStory, ComponentMeta } from '@storybook/react';

import Sample from './Sample';

export default {
  title: 'Pages/Sample',
  component: Sample,
} as ComponentMeta<typeof Sample>;

const Template: ComponentStory<typeof Sample> = (args) => <Sample {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '샘플 페이지',
};
