import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import EntityForm from '@/components/EntityForm';
import { Beers } from '@/constants/Beers';

import EmojiRadioField from './EmojiRadioField';

export default {
  title: 'FormFields/EmojiRadioField',
  component: EmojiRadioField,
  decorators: [
    (Story) => (
      <EntityForm onSubmit={action('onSubmit')}>
        <Story />
      </EntityForm>
    ),
  ],
  argTypes: {
    className: { control: 'text' },
  },
} as ComponentMeta<typeof EmojiRadioField>;

const Template: ComponentStory<typeof EmojiRadioField> = (args) => <EmojiRadioField {...args} />;

export const 이모지_라디오_필드 = Template.bind({});
이모지_라디오_필드.args = {
  name: 'emojiRadioField',
};
