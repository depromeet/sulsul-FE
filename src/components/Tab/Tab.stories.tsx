import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';

import Tab from './Tab';

export default {
  title: 'Components/Tab',
  component: Tab,
  argTypes: {
    isSwipable: { control: 'boolean', defaultValue: true },
    isGhost: { control: 'boolean', defaultValue: false },
  },
} as ComponentMeta<typeof Tab>;

const TabPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: ${(p) => p.theme.color.whiteOpacity20};
`;

const Template: ComponentStory<typeof Tab> = (args) => (
  <Tab {...args} onChange={(index) => console.log(index)}>
    {Array(args.tabItems.length)
      .fill(0)
      .map((_, index) => (
        <TabPage key={index}>page {index + 1}</TabPage>
      ))}
  </Tab>
);

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
  <Tab {...args} isSwipable={false}>
    <TabPage>page1</TabPage>
    <Tab tabItems={countries} size="small" type="primary" isGhost isSwipable>
      {Array(countries.length)
        .fill(0)
        .map((_, index) => (
          <div key={index}>
            <TabPage>page {index + 1}</TabPage>
          </div>
        ))}
    </Tab>
  </Tab>
);

export const 필터_탭 = Template2.bind({});
필터_탭.args = {
  type: 'primary',
  tabItems: ['종류', '대륙'],
};
