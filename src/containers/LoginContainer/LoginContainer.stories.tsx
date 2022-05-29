import { ComponentStory, ComponentMeta, ComponentStoryObj } from '@storybook/react';

import LoginContainer from './LoginContainer';

export default {
  title: 'Pages/로그인',
  component: LoginContainer,
} as ComponentMeta<typeof LoginContainer>;

export const 소셜_로그인: ComponentStoryObj<typeof LoginContainer> = {
  args: {
    step: 1,
  },
};

export const 닉네임_입력: ComponentStoryObj<typeof LoginContainer> = {
  args: {
    step: 2,
  },
};
