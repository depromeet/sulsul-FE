import styled from '@emotion/styled';
import BeerListItem from './BeerListItem';

export default {
  title: 'Components/BeerListItem',
  component: 'BeerListItem',
};

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
      feel: 5,
      isLiked: false,
    },
  },
];

export const DefaultBeerListItem = () => {
  return (
    <Container>
      <BeerListItem beer={BeerList[0].beer} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
