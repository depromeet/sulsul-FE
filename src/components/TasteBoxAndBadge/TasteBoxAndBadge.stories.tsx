import { ComponentStory, ComponentMeta } from '@storybook/react';

import TasteBoxAndBadge from './TasteBoxAndBadge';

export default {
  title: 'Components/TasteBoxAndBadge',
  component: TasteBoxAndBadge,
  argTypes: {
    text: { control: 'text' },
    likeCount: { control: 'text' },
  },
  args: {
    text: '목넘김이 부드러워요',
    likeCount: 12,
  },
} as ComponentMeta<typeof TasteBoxAndBadge>;

const Template: ComponentStory<typeof TasteBoxAndBadge> = ({ ...args }) => (
  <TasteBoxAndBadge {...args} />
);

export const Default = Template.bind({});
Default.args = {};
