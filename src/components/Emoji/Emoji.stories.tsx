import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Emoji from './Emoji';

export default {
  title: 'Components/Emoji',
  component: Emoji,
  argTypes: {
    feel: { control: 'radio', options: [5, 4, 3, 2, 1, null] },
  },
} as ComponentMeta<typeof Emoji>;

const Template: ComponentStory<typeof Emoji> = (args) => <Emoji {...args} />;

export const DefaultEmoji = Template.bind({});
DefaultEmoji.args = {
  feel: 5,
};
