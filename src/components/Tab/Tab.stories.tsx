import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';

import Tab from './Tab';
import Swiper from '../Swiper';

export default {
  title: 'Components/Tab',
  component: Tab,
  argTypes: {
    isSwipable: { control: 'boolean', defaultValue: true },
    isGhost: { control: 'boolean', defaultValue: false },
  },
} as ComponentMeta<typeof Tab>;

const StyledH1 = styled.h1`
  padding: 12px 0 8px;
  font-size: 16px;
  font-weight: 600;
  color: ${(p) => p.theme.color.white};
`;

const StyledTabPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: ${(p) => p.theme.color.whiteOpacity20};
`;

const Template: ComponentStory<typeof Tab> = (args) => {
  const [activatedIndex, setActivatedIndex] = useState(0);

  return (
    <>
      <div>
        <StyledH1>children 타입: ReactChild[]</StyledH1>
        <Tab {...args} outerActivatedIndex={activatedIndex} onChange={setActivatedIndex}>
          {Array(args.tabItems.length)
            .fill(0)
            .map((_, index) => (
              <StyledTabPage key={index}>page {index + 1}</StyledTabPage>
            ))}
        </Tab>
      </div>
      <div>
        <StyledH1>children 타입: ReactChild (children에 스와이프 적용)</StyledH1>
        <Tab {...args} outerActivatedIndex={activatedIndex} onChange={setActivatedIndex}>
          <Swiper selectedItem={activatedIndex} onChange={setActivatedIndex}>
            {Array(args.tabItems.length)
              .fill(0)
              .map((_, index) => (
                <StyledTabPage key={index}>page {index + 1}</StyledTabPage>
              ))}
          </Swiper>
        </Tab>
      </div>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  tabItems: ['종류', '대륙'],
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  tabItems: ['안 마셔본 맥주', '반한 맥주'],
};

const countries = ['전체', '아시아', '유럽', '북아메리카', '남아메리카', '호주'];

export const Primary_Ghost_small = Template.bind({});
Primary_Ghost_small.args = {
  type: 'primary',
  tabItems: countries,
  isGhost: true,
  size: 'small',
};

const Template2: ComponentStory<typeof Tab> = (args) => (
  <Tab {...args}>
    <StyledTabPage>page1</StyledTabPage>
    <Tab tabItems={countries} size="small" type="primary" isGhost>
      {Array(countries.length)
        .fill(0)
        .map((_, index) => (
          <StyledTabPage key={index}>page {index + 1}</StyledTabPage>
        ))}
    </Tab>
  </Tab>
);

export const 필터_탭 = Template2.bind({});
필터_탭.args = {
  type: 'primary',
  tabItems: ['종류', '대륙'],
};
