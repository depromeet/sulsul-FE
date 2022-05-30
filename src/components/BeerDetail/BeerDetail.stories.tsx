import { EBeerType } from '@/apis';
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
      nameKor: '한국',
      nameEng: 'korea',
      imageUrl: '',
      continent: {
        id: 1,
        name: '아시아',
      },
    },
    type: {
      nameEng: EBeerType.LIGHT_ALE,
      nameKor: '위트 에일',
      imageUrl: '',
      description: '투명한 황금빛으로 단 맛과 쓴 맛이 어우러진 깔끔한 맛',
    },
    nameKor: '제주 위트 에일 제주 위트 에일 제주 위트 에일 제주 위트 에일',
    nameEng: 'Jeju Wit Ale Jeju Wit Ale Jeju Wit Ale Jeju Wit Ale Jeju Wit Ale Jeju Wit Ale',
    imageUrl: 'https://ifh.cc/g/X6B8Ra.png',
    alcohol: 5.5,
    price: 4200,
    volume: 50,
    isLiked: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};
