import { IRecordsByBeer } from '@/apis/record';

export const FEEL_MESSAGES = {
  1: '별로예요!',
  2: '애매해요!',
  3: '보통이에요!',
  4: '좋았어요!',
  5: '최고예요!',
};

export const Reviews: IRecordsByBeer[] = [
  {
    id: 1,
    content:
      '날씨도 좋은데 놀러가지도 못하고..! 기분 내려고 한 잔 한다. 이순간 만큼은 제주다 이거야~',
    feel: 5,
    memberRecordDto: { id: 1, name: '호딩' },
    createdAt: '2022-06-11T02:55:12.151Z',
    updatedAt: '2022-06-11T02:55:12.151Z',
    flavorDtos: [
      { id: 1, content: '목넘김이 부드러워요' },
      { id: 2, content: '목넘김이 안부드러워요' },
      { id: 3, content: '목넘김이 짱부드러워요' },
    ],
  },
];
