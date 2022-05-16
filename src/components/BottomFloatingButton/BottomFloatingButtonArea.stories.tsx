import { ComponentStory, ComponentMeta } from '@storybook/react';

import BottomFloatingButtonArea from './BottomFloatingButtonArea';

export default {
  title: 'Components/BottomFloatingButtonArea',
  component: BottomFloatingButtonArea,
  argTypes: {
    type: { control: 'select', options: ['record', 'recommand', 'withHomeButton'] },
    isOnlyHomeButton: { control: 'boolean' },
  },
  args: { isOnlyHomeButton: false },
  decorators: [
    (Story) => (
      <main>
        <Story />
        {Array(100)
          .fill(0)
          .map((_, index) => (
            <p key={index}>스크롤</p>
          ))}
      </main>
    ),
  ],
} as ComponentMeta<typeof BottomFloatingButtonArea>;

const Template: ComponentStory<typeof BottomFloatingButtonArea> = ({ ...args }) => (
  <BottomFloatingButtonArea {...args} />
);

export const 기록하기 = Template.bind({});
기록하기.args = {
  type: 'record',
};
export const 다른_맥주_추천_받기 = Template.bind({});
다른_맥주_추천_받기.args = {
  type: 'recommand',
};
export const withHomeButton = Template.bind({});
withHomeButton.args = {
  type: 'withHomeButton',
};
