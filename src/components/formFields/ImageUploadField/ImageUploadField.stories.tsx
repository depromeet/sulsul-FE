import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import EntityForm from '@/components/EntityForm';

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

export const BasicTextAreaField = Template.bind({});
BasicTextAreaField.args = {
  name: 'imageUploadField',
};
