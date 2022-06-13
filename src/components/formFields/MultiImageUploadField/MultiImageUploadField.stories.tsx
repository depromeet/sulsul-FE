import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import EntityForm from '@/components/EntityForm';

import MultiImageUploadField from './MultiImageUploadField';

export default {
  title: 'FormFields/MultiImageUploadField',
  component: MultiImageUploadField,
  decorators: [
    (Story) => (
      <EntityForm onSubmit={action('onSubmit')}>
        <Story />
      </EntityForm>
    ),
  ],
} as ComponentMeta<typeof MultiImageUploadField>;

const Template: ComponentStory<typeof MultiImageUploadField> = (args) => (
  <MultiImageUploadField {...args} />
);

export const BasicMultiImageUploadField = Template.bind({});
BasicMultiImageUploadField.args = {
  maxLength: 2,
  name: 'imageUploadField',
};
