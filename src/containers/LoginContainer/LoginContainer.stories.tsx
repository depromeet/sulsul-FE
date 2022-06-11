import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import LoginContainer from './LoginContainer';

export default {
  title: 'Pages/로그인',
  component: LoginContainer,
} as ComponentMeta<typeof LoginContainer>;

export const 로그인: ComponentStoryObj<typeof LoginContainer> = {
  args: {
    step: 1,
  },
};
