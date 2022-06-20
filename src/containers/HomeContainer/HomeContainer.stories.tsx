import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RecoilRoot } from 'recoil';

import { Record } from '@/constants/Record';
import { $userSession } from '@/recoil/atoms';

import HomeContainer from './HomeContainer';

export default {
  title: 'Pages/홈',
  component: HomeContainer,
  decorators: [
    (Story) => (
      <RecoilRoot
        initializeState={({ set }) => {
          set($userSession, {
            id: 1,
            email: 'zizon@zizon.com',
            name: '퇴근하고싶다',
            phoneNumber: '010-0000-0000',
            profileUrl: '',
            role: 'test',
            social: 'test',
            memberLevelResponseDto: {
              id: 1,
              imageUrl: '',
              req: 50,
              tier: 4,
            },
          });
        }}
      >
        <Story />
      </RecoilRoot>
    ),
  ],
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
};
