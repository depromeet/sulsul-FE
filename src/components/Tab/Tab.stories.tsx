import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';

import Tab from './Tab';

export default {
  title: 'Components/Tab',
  component: Tab,
  argTypes: {
    isSwipable: { control: 'boolean', defaultValue: false },
  },
} as ComponentMeta<typeof Tab>;

const TabPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: ${(p) => p.theme.color.whiteOpacity20};
`;

const Template: ComponentStory<typeof Tab> = (args) => (
  <>
    <Tab {...args} onChange={(index) => console.log(index)}>
      <div>
        <TabPage>page1</TabPage>
      </div>
      <div>
        <TabPage>page2</TabPage>
      </div>
    </Tab>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  tabItems: ['종류', '대륙'],
  defaultActivatedIndex: 0,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  tabItems: ['안 마셔본 맥주', '반한 맥주'],
  defaultActivatedIndex: 0,
};
