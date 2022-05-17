import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import EntityForm from '@/components/EntityForm';
import { Beers } from '@/constants/Beers';

import EmogiRadioField from './EmogiRadioField';

export default {
  title: 'FormFields/EmogiRadioField',
  component: EmogiRadioField,
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
} as ComponentMeta<typeof EmogiRadioField>;

const Template: ComponentStory<typeof EmogiRadioField> = (args) => <EmogiRadioField {...args} />;

export const 이모지_라디오_필드 = Template.bind({});
이모지_라디오_필드.args = {
  name: 'emogiRadioField',
};
