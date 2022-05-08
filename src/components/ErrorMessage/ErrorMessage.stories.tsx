import { ComponentStory, ComponentMeta } from '@storybook/react';

import ErrorMessage from './ErrorMessage';

export default {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
} as ComponentMeta<typeof ErrorMessage>;

const Template: ComponentStory<typeof ErrorMessage> = (args) => <ErrorMessage {...args} />;

export const BasicErrorMessage = Template.bind({});
BasicErrorMessage.args = {
  message: '에러났어요 ㅜㅜ',
};
