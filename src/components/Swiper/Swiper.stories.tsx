import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from '@emotion/styled';

import Swiper from './Swiper';

export default {
  title: 'Components/Swiper',
  component: Swiper,
} as ComponentMeta<typeof Swiper>;

const TabPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: ${(p) => p.theme.color.whiteOpacity20};
`;

const Template: ComponentStory<typeof Swiper> = (args) => (
  <Swiper {...args}>
    {Array(6)
      .fill(0)
      .map((value, index) => (
        <TabPage key={index}>page {index + 1}</TabPage>
      ))}
  </Swiper>
);

export const Default = Template.bind({});
Default.args = {};
