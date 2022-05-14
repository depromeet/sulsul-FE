import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import EntityForm from '@/components/EntityForm';
import { Beers } from '@/constants/Beers';

import ImageUploadField from './ImageUploadField';

export default {
  title: 'FormFields/ImageUploadField',
  component: ImageUploadField,
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
} as ComponentMeta<typeof ImageUploadField>;

const Template: ComponentStory<typeof ImageUploadField> = (args) => <ImageUploadField {...args} />;

export const BasicImageUploadField = Template.bind({});
BasicImageUploadField.args = {
  name: 'imageUploadField',
  title: '사진 바꾸기',
  beer: Beers[0],
};
