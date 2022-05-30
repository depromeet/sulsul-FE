import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';

import LoginLayout from './LoginLayout';

export default {
  title: 'Components/layouts/LoginLayout',
  component: LoginLayout,
  args: {
    title: '계정을 등록하면\n맥주에 대한 평가를\n기록하고 공유할 수 있습니다!',
  },
} as ComponentMeta<typeof LoginLayout>;

const Template: ComponentStory<typeof LoginLayout> = (args) => (
  <LoginLayout {...args}>
    <>컨텐츠...</>
  </LoginLayout>
);

export const 로그인_레이아웃 = Template.bind({});
