import { IRecord } from '@/apis/record';

export const Record: IRecord = {
  id: 20,
  content: '맛이 좋아요(한줄평)',
  feel: 3,
  imageUrl: 'https://www.notion.so/depromeet',
  memberRecordDto: null,
  createdAt: new Date(),
  updatedAt: new Date(),
  startCountryKor: 'seoul',
  startCountryEng: '서울',
  endCountryKor: '12',
  endCountryEng: 'Seoul',
  flavorDtos: [
    {
      id: 1,
      content: '탄 맛이나요',
    },
    {
      id: 2,
      content: '목넘김이 부드러워요',
    },
    {
      id: 3,
      content: '쓴 맛이 나요',
    },
  ],
  beerResponseDto: {
    id: 1,
    type: {
      nameEng: 'LIGHT_ALE' as any,
      nameKor: 'test',
      description: 'test',
      imageUrl: 'test',
    },
    country: { id: 1, nameKor: '테스트', nameEng: 'test', imageUrl: 'test' },
    nameKor: '평양',
    nameEng: 'peng',
    imageUrl: 'https://www.naver.com',
    content: '1',
    alcohol: 5.5,
    price: 1,
    volume: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  recordCount: 13,
};
