import { Beers } from '@/constants/Beers';
import { Reviews } from '@/constants/Reviews';
import { TasteBoxAndBadges } from '@/constants/TasteBoxAndBadge';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerDetailPage from './BeerDetailContainer';

export default {
  title: 'Pages/맥주 상세정보',
  component: BeerDetailPage,
} as ComponentMeta<typeof BeerDetailPage>;

const Template: ComponentStory<typeof BeerDetailPage> = (args) => <BeerDetailPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  beerDetail: {
    beer: { ...Beers[0] },
  },
  backgroundImageUrl:
    'https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amVqdXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  airPort: {
    departureKor: '한국',
    departureEng: 'KOR',
    destinationKor: '미쿡',
    destinationEng: 'USA',
  },
  beerContent: `'제주 위트 에일’은 제주 청정 재료인 유기농 제주 감귤 껍질을 사용해 은은한 감귤 향의 산뜻한
  끝 맛이 특징이다. 독일산 보리 맥아와 밀 맥아를 함께 사용해 부드러운 음용감으로 에일 맥주
  입문자들도 편하게 즐길 수 있다.`,
  tasteBoxAndBadge: [...TasteBoxAndBadges],
  review: [...Reviews],
};

Default.story = {
  parameters: {
    nextRouter: {
      path: '/beers/[id]',
      asPath: '/beers/1',
      query: {
        id: '1',
      },
    },
  },
};
