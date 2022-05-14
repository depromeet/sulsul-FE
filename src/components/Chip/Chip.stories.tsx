import { ComponentStory, ComponentMeta } from '@storybook/react';

import Chip from './Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '페일 에일',
};
