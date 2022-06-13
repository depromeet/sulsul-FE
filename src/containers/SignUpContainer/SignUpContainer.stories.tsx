import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import SignUpContainer from './SignUpContainer';

export default {
  title: 'Pages/회원가입',
  component: SignUpContainer,
} as ComponentMeta<typeof SignUpContainer>;

export const 회원가입: ComponentStoryObj<typeof SignUpContainer> = {};
