import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Record } from '@/constants/Record';

import HomeContainer from './HomeContainer';

export default {
  title: 'Pages/홈',
  component: HomeContainer,
} as ComponentMeta<typeof HomeContainer>;

export const 홈: ComponentStory<typeof HomeContainer> = (args) => <HomeContainer {...args} />;

홈.args = {
  myRecordResponse: {
    success: true,
    resultCount: 10,
    hasNext: false,
    nextCursor: 10,
    // contents: [{ ...Record }],
    contents: [{ ...Record }, { ...Record, id: 2 }, { ...Record, id: 3 }, { ...Record, id: 4 }],
  },
  user: {
    id: 1,
    email: 'zizon@zizon.com',
    name: '퇴근하고싶다',
    phoneNumber: '010-0000-0000',
    profileUrl: '',
    role: 'test',
    social: 'test',
  },
};
