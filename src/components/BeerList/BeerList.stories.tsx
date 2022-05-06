import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerList from './BeerList';

export default {
  title: 'Components/BeerList',
  component: BeerList,
  argTypes: {
    type: { control: 'radio', options: ['grid', 'list'] },
  },
  args: {},
} as ComponentMeta<typeof BeerList>;

const Template: ComponentStory<typeof BeerList> = ({ ...args }) => (
  <Container>
    <BeerList {...args} />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

export const Default = Template.bind({});
Default.args = {
  beers: [
    {
      id: 1,
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
      content:
        '‘제주 위트 에일’은 제주 청정 재료인 유기농 제주 감귤 껍질을 사용해 은은한 감귤 향의 산뜻한 끝 맛이 특징이다. 독일산 보리 맥아와 밀 맥아를 함께 사용해 부드러운 음용감으로 에일 맥주 입문자들도 편하게 즐길 수 있다.',
      alcohol: 5.5,
      price: 4200,
      volume: 50,
      feel: 5,
      isLiked: false,
    },
    {
      id: 2,
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
      content:
        '‘제주 위트 에일’은 제주 청정 재료인 유기농 제주 감귤 껍질을 사용해 은은한 감귤 향의 산뜻한 끝 맛이 특징이다. 독일산 보리 맥아와 밀 맥아를 함께 사용해 부드러운 음용감으로 에일 맥주 입문자들도 편하게 즐길 수 있다.',
      alcohol: 5.5,
      price: 4200,
      volume: 50,
      feel: 5,
      isLiked: false,
    },
    {
      id: 3,
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
      content:
        '‘제주 위트 에일’은 제주 청정 재료인 유기농 제주 감귤 껍질을 사용해 은은한 감귤 향의 산뜻한 끝 맛이 특징이다. 독일산 보리 맥아와 밀 맥아를 함께 사용해 부드러운 음용감으로 에일 맥주 입문자들도 편하게 즐길 수 있다.',
      alcohol: 5.5,
      price: 4200,
      volume: 50,
      feel: 5,
      isLiked: false,
    },
    {
      id: 4,
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
      content:
        '‘제주 위트 에일’은 제주 청정 재료인 유기농 제주 감귤 껍질을 사용해 은은한 감귤 향의 산뜻한 끝 맛이 특징이다. 독일산 보리 맥아와 밀 맥아를 함께 사용해 부드러운 음용감으로 에일 맥주 입문자들도 편하게 즐길 수 있다.',
      alcohol: 5.5,
      price: 4200,
      volume: 50,
      feel: 5,
      isLiked: false,
    },
    {
      id: 5,
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
      content:
        '‘제주 위트 에일’은 제주 청정 재료인 유기농 제주 감귤 껍질을 사용해 은은한 감귤 향의 산뜻한 끝 맛이 특징이다. 독일산 보리 맥아와 밀 맥아를 함께 사용해 부드러운 음용감으로 에일 맥주 입문자들도 편하게 즐길 수 있다.',
      alcohol: 5.5,
      price: 4200,
      volume: 50,
      feel: 5,
      isLiked: false,
    },
    {
      id: 6,
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
      content:
        '‘제주 위트 에일’은 제주 청정 재료인 유기농 제주 감귤 껍질을 사용해 은은한 감귤 향의 산뜻한 끝 맛이 특징이다. 독일산 보리 맥아와 밀 맥아를 함께 사용해 부드러운 음용감으로 에일 맥주 입문자들도 편하게 즐길 수 있다.',
      alcohol: 5.5,
      price: 4200,
      volume: 50,
      feel: 5,
      isLiked: false,
    },
    {
      id: 7,
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
      content:
        '‘제주 위트 에일’은 제주 청정 재료인 유기농 제주 감귤 껍질을 사용해 은은한 감귤 향의 산뜻한 끝 맛이 특징이다. 독일산 보리 맥아와 밀 맥아를 함께 사용해 부드러운 음용감으로 에일 맥주 입문자들도 편하게 즐길 수 있다.',
      alcohol: 5.5,
      price: 4200,
      volume: 50,
      feel: 5,
      isLiked: false,
    },
    {
      id: 8,
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
      content:
        '‘제주 위트 에일’은 제주 청정 재료인 유기농 제주 감귤 껍질을 사용해 은은한 감귤 향의 산뜻한 끝 맛이 특징이다. 독일산 보리 맥아와 밀 맥아를 함께 사용해 부드러운 음용감으로 에일 맥주 입문자들도 편하게 즐길 수 있다.',
      alcohol: 5.5,
      price: 4200,
      volume: 50,
      feel: 5,
      isLiked: false,
    },
    {
      id: 9,
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
      content:
        '‘제주 위트 에일’은 제주 청정 재료인 유기농 제주 감귤 껍질을 사용해 은은한 감귤 향의 산뜻한 끝 맛이 특징이다. 독일산 보리 맥아와 밀 맥아를 함께 사용해 부드러운 음용감으로 에일 맥주 입문자들도 편하게 즐길 수 있다.',
      alcohol: 5.5,
      price: 4200,
      volume: 50,
      feel: 5,
      isLiked: false,
    },
    {
      id: 10,
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
      content:
        '‘제주 위트 에일’은 제주 청정 재료인 유기농 제주 감귤 껍질을 사용해 은은한 감귤 향의 산뜻한 끝 맛이 특징이다. 독일산 보리 맥아와 밀 맥아를 함께 사용해 부드러운 음용감으로 에일 맥주 입문자들도 편하게 즐길 수 있다.',
      alcohol: 5.5,
      price: 4200,
      volume: 50,
      feel: 5,
      isLiked: false,
    },
    {
      id: 11,
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
      content:
        '‘제주 위트 에일’은 제주 청정 재료인 유기농 제주 감귤 껍질을 사용해 은은한 감귤 향의 산뜻한 끝 맛이 특징이다. 독일산 보리 맥아와 밀 맥아를 함께 사용해 부드러운 음용감으로 에일 맥주 입문자들도 편하게 즐길 수 있다.',
      alcohol: 5.5,
      price: 4200,
      volume: 50,
      feel: 5,
      isLiked: false,
    },
    {
      id: 12,
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
      content:
        '‘제주 위트 에일’은 제주 청정 재료인 유기농 제주 감귤 껍질을 사용해 은은한 감귤 향의 산뜻한 끝 맛이 특징이다. 독일산 보리 맥아와 밀 맥아를 함께 사용해 부드러운 음용감으로 에일 맥주 입문자들도 편하게 즐길 수 있다.',
      alcohol: 5.5,
      price: 4200,
      volume: 50,
      feel: 5,
      isLiked: false,
    },
    {
      id: 13,
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
      content:
        '‘제주 위트 에일’은 제주 청정 재료인 유기농 제주 감귤 껍질을 사용해 은은한 감귤 향의 산뜻한 끝 맛이 특징이다. 독일산 보리 맥아와 밀 맥아를 함께 사용해 부드러운 음용감으로 에일 맥주 입문자들도 편하게 즐길 수 있다.',
      alcohol: 5.5,
      price: 4200,
      volume: 50,
      feel: 5,
      isLiked: false,
    },
    {
      id: 14,
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
      content:
        '‘제주 위트 에일’은 제주 청정 재료인 유기농 제주 감귤 껍질을 사용해 은은한 감귤 향의 산뜻한 끝 맛이 특징이다. 독일산 보리 맥아와 밀 맥아를 함께 사용해 부드러운 음용감으로 에일 맥주 입문자들도 편하게 즐길 수 있다.',
      alcohol: 5.5,
      price: 4200,
      volume: 50,
      feel: 5,
      isLiked: false,
    },
    {
      id: 15,
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
      content:
        '‘제주 위트 에일’은 제주 청정 재료인 유기농 제주 감귤 껍질을 사용해 은은한 감귤 향의 산뜻한 끝 맛이 특징이다. 독일산 보리 맥아와 밀 맥아를 함께 사용해 부드러운 음용감으로 에일 맥주 입문자들도 편하게 즐길 수 있다.',
      alcohol: 5.5,
      price: 4200,
      volume: 50,
      feel: 5,
      isLiked: false,
    },
    {
      id: 16,
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
      content:
        '‘제주 위트 에일’은 제주 청정 재료인 유기농 제주 감귤 껍질을 사용해 은은한 감귤 향의 산뜻한 끝 맛이 특징이다. 독일산 보리 맥아와 밀 맥아를 함께 사용해 부드러운 음용감으로 에일 맥주 입문자들도 편하게 즐길 수 있다.',
      alcohol: 5.5,
      price: 4200,
      volume: 50,
      feel: 5,
      isLiked: false,
    },
    {
      id: 17,
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
      content:
        '‘제주 위트 에일’은 제주 청정 재료인 유기농 제주 감귤 껍질을 사용해 은은한 감귤 향의 산뜻한 끝 맛이 특징이다. 독일산 보리 맥아와 밀 맥아를 함께 사용해 부드러운 음용감으로 에일 맥주 입문자들도 편하게 즐길 수 있다.',
      alcohol: 5.5,
      price: 4200,
      volume: 50,
      feel: 5,
      isLiked: false,
    },
  ],
};
