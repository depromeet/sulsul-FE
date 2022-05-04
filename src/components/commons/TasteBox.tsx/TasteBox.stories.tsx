import { ComponentStory, ComponentMeta } from '@storybook/react';

import TasteBox from './TasteBox';

export default {
  title: 'Commons/TasteBox',
  component: TasteBox,
  argTypes: {
    children: { control: 'text', name: 'text' },
    width: { control: 'text' },
    type: { control: 'select', options: ['primary', 'secondary', 'ghost', 'default'] },
    size: { control: 'select', options: ['long', 'short'] },
  },
  args: {
    children: 'TasteBox 말고 더 좋은 이름 없을까',
  },
} as ComponentMeta<typeof TasteBox>;

const Template: ComponentStory<typeof TasteBox> = ({ ...args }) => <TasteBox {...args} />;

export const PrimaryLong = Template.bind({});
PrimaryLong.args = {
  type: 'primary',
  size: 'long',
};

export const DefaultLong = Template.bind({});
DefaultLong.args = {
  type: 'default',
  size: 'long',
};

export const PrimaryShort = Template.bind({});
PrimaryShort.args = {
  type: 'primary',
  size: 'short',
  children: '나랑 맥주 먹고 갈래?',
};

export const DefaultShort = Template.bind({});
DefaultShort.args = {
  type: 'default',
  size: 'short',
  children: '나랑 맥주 먹고 갈래?',
};
