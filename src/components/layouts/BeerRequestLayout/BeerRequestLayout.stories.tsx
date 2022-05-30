import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerRequestLayout from './BeerRequestLayout';
import styled from '@emotion/styled';

export default {
  title: 'Components/layouts/BeerRequestLayout',
  component: BeerRequestLayout,
  args: {
    title: '등록할 맥주의 정보를\n입력해 주세요',
  },
} as ComponentMeta<typeof BeerRequestLayout>;

const StyledContent = styled.div`
  color: ${(p) => p.theme.color.black100};
  text-align: center;
`;

const Template: ComponentStory<typeof BeerRequestLayout> = (args) => (
  <BeerRequestLayout {...args}>
    <StyledContent>여기부터 컨텐츠 영역</StyledContent>
  </BeerRequestLayout>
);

export const 로그인_레이아웃 = Template.bind({});
