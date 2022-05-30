import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';

import SwiperLayout, { SwiperLayoutChildProps } from './SwiperLayout';

export default {
  title: 'Components/layouts/SwiperLayout',
  component: SwiperLayout,
  argTypes: {
    className: {
      control: 'readonly',
    },
  },
} as ComponentMeta<typeof SwiperLayout>;

const StyledDummyPage = styled.div`
  & .button-wrapper button {
    width: 100px;
  }
`;

const DummyPage: React.FC<{ children?: React.ReactNode } & SwiperLayoutChildProps> = ({
  onMovePrev,
  onMoveNext,
  children,
}) => {
  return (
    <StyledDummyPage>
      {children}
      <div className="button-wrapper">
        <button type="button" onClick={onMovePrev}>
          prev
        </button>
        <button type="button" onClick={onMoveNext}>
          next
        </button>
      </div>
    </StyledDummyPage>
  );
};

const Template: ComponentStory<typeof SwiperLayout> = (args) => (
  <SwiperLayout {...args}>
    <DummyPage>1</DummyPage>
    <DummyPage>2</DummyPage>
    <DummyPage>3</DummyPage>
    <DummyPage>4</DummyPage>
  </SwiperLayout>
);

export const 스와이퍼_레이아웃 = Template.bind({});
스와이퍼_레이아웃.args = {};
