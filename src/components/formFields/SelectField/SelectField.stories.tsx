import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import EntityForm from '@/components/EntityForm';

import SelectField from './SelectField';

export default {
  title: 'FormFields/SelectField',
  component: SelectField,
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
} as ComponentMeta<typeof SelectField>;

const Template: ComponentStory<typeof SelectField> = (args) => <SelectField {...args} />;

export const BasicSelectField = Template.bind({});
BasicSelectField.args = {
  name: 'SelectField',
};
