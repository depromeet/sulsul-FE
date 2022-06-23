import { ComponentStory, ComponentMeta } from '@storybook/react';

import ErrorPage from './ErrorPage';

export default {
  title: 'Components/ErrorPage',
  component: ErrorPage,
  args: {},
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = ({ ...args }) => <ErrorPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '앗!',
  subtitle: '일시적인 오류가 발생했어요.',
};
