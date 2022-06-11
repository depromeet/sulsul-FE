import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Record } from '@/constants/Record';

import RecordsContainer from './RecordsContainer';

export default {
  title: 'Pages/기록 목록 페이지',
  component: RecordsContainer,
} as ComponentMeta<typeof RecordsContainer>;

const Template: ComponentStory<typeof RecordsContainer> = (args) => <RecordsContainer {...args} />;

export const 기록목록_페이지 = Template.bind({});
기록목록_페이지.args = {
  records: [{ ...Record }, { ...Record, id: 2 }, { ...Record, id: 3 }, { ...Record, id: 4 }],
  recentlyVisitedCountry: {
    nameKor: '테스트',
    nameEng: 'test',
    count: 2,
  },
};
