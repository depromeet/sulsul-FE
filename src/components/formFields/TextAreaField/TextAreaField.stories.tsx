import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import EntityForm from '@/components/EntityForm';

import TextAreaField from './TextAreaField';

export default {
  title: 'FormFields/TextAreaField',
  component: TextAreaField,
  decorators: [
    (Story) => (
      <EntityForm onSubmit={action('onSubmit')}>
        <div style={{ height: '100vh', padding: '20px', backgroundColor: '#000' }}>
          <Story />
        </div>
      </EntityForm>
    ),
  ],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    className: { control: 'text' },
  },
} as ComponentMeta<typeof TextAreaField>;

const Template: ComponentStory<typeof TextAreaField> = (args) => <TextAreaField {...args} />;

export const BasicTextAreaField = Template.bind({});
BasicTextAreaField.args = {
  name: 'textAreaField',
  width: '100%',
  height: 'fit-content',
};

export const FullTextAreaField = Template.bind({});
FullTextAreaField.args = {
  name: 'textAreaField',
  width: '100%',
  height: '100%',
};
