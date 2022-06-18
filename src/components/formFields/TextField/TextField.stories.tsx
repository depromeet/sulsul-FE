import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import EntityForm from '@/components/EntityForm';

import TextField from './TextField';

export default {
  title: 'FormFields/TextField',
  component: TextField,
  decorators: [
    (Story) => (
      <EntityForm onSubmit={action('onSubmit')}>
        <div style={{ height: '100vh', padding: '20px', backgroundColor: '#fff' }}>
          <Story />
        </div>
      </EntityForm>
    ),
  ],
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const BasicTextField = Template.bind({});
BasicTextField.args = {
  name: 'TextField',
  width: '100%',
  height: 'fit-content',
};
