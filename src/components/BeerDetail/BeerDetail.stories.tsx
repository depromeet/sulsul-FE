import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerDetail from './BeerDetail';

export default {
  title: 'Components/BeerDetail',
  component: BeerDetail,
  argTypes: {},
} as ComponentMeta<typeof BeerDetail>;

const Template: ComponentStory<typeof BeerDetail> = (args) => (
  <Container>
    <BeerDetail {...args} />
  </Container>
);

const Container = styled.div`
  padding: 0 20px;
`;

export const DefaultBeerDetail = Template.bind({});
DefaultBeerDetail.args = {
  beer: {
    country: {
      id: 1,
      name: '한국',
      continent: {
        id: 1,
        name: '아시아',
      },
    },
    type: '위트 에일',
    name: '제주 위트 에일',
    nameEng: 'Jeju Wit Ale',
    imageUrl: 'https://ifh.cc/g/X6B8Ra.png',
    alcohol: 5.5,
    price: 4200,
    volume: 50,
    isLiked: false,
  },
  url: 'www.naver.com',
  isCompact: false,
};
