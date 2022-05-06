import { ComponentStory, ComponentMeta } from '@storybook/react';

import Review from './Review';

export default {
  title: 'Components/Review',
  component: Review,
  argTypes: {
    me: { control: 'boolean' },
    userName: { control: 'text', name: 'userName' },
    border: { control: 'boolean' },
  },
} as ComponentMeta<typeof Review>;

const Template: ComponentStory<typeof Review> = (args) => <Review {...args} />;

export const Default = Template.bind({});
Default.args = {
  feel: 5,
  me: true,
  userName: '맥주킬러',
  reviewCount: 2,
  content:
    '날씨도 좋은데 놀러가지도 못하고..! 기분 내려고 한 잔 한다. 이순간 만큼은 제주다 이거야~',
  date: '2022.05.05',
  tags: ['목넘김이 부드러워요', '과일향이 나요', '깔끔해요', '어쩌구저쩌구'],
  border: true,
};
