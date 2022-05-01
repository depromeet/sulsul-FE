import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import BeerListItem from './BeerListItem';

export default {
  title: 'Components/BeerListItem',
  component: BeerListItem,
} as ComponentMeta<typeof BeerListItem>;

const Template: ComponentStory<typeof BeerListItem> = (args) => (
  <Container>
    <BeerListItem {...args} />
  </Container>
);

const BeerList = [
  {
    beer: {
      id: 1,
      country: {
        id: 1,
        name: '일본',
        continent: {
          id: 1,
          name: '아시아',
        },
      },
      type: 'LARGER',
      name: '삿포로',
      imageUrl: 'https://ifh.cc/g/X6B8Ra.png',
      content:
        '황금색. 곡물 맛과 약간의 홉 맛이 드러난다. 전체적으로 맛이 가볍고 청량감이 느껴지며 피니시가 깔끔하다. 쌀과 옥수수 함유.',
      alcohol: 5.0,
      price: 4000,
      volume: 500,
      feel: null,
      isLiked: false,
    },
  },
];

export const LikedBeerListItem = Template.bind({});
LikedBeerListItem.args = {
  beer: { ...BeerList[0].beer, feel: 5 },
};

export const DefaultBeerListItem = Template.bind({});
DefaultBeerListItem.args = {
  beer: { ...BeerList[0].beer },
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
