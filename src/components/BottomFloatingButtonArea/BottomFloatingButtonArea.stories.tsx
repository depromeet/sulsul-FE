import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '@/components/commons/Button';
import Icon from '@/components/commons/Icon';
import BottomFloatingButtonArea from './BottomFloatingButtonArea';

export default {
  title: 'Components/BottomFloatingButtonArea',
  component: BottomFloatingButtonArea,
  argTypes: {
    withHomeButton: { control: 'boolean' },
    isOnlyHomeButton: { control: 'boolean' },
  },
  args: { withHomeButton: false, isOnlyHomeButton: false },
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
  button: (
    <Button type="primary" width="large" rightAddon={<Icon name="FlightTakeOff" />}>
      기록하기
    </Button>
  ),
};
export const 다른_맥주_추천_받기 = Template.bind({});
다른_맥주_추천_받기.args = {
  button: (
    <Button type="primary" width="large" leftAddon={<Icon name="Random" />}>
      다른 맥주 추천 받기
    </Button>
  ),
};
export const withHomeButton = Template.bind({});
withHomeButton.args = {
  button: (
    <Button type="primary" width="large">
      맥주 정보 보기
    </Button>
  ),
  withHomeButton: true,
};
