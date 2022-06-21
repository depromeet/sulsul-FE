import { IRequestBeerStatus } from '@/apis';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import RequestedBeerItem from './RequestedBeerItem';

export default {
  title: 'Components/RequestedBeerItem',
  component: RequestedBeerItem,
  args: {
    beerNameKor: '하이네켄 벚꽃 맥주',
    createdAt: '2022-06-21T02:55:12.151Z',
  },
} as ComponentMeta<typeof RequestedBeerItem>;

export const 심사중: ComponentStoryObj<typeof RequestedBeerItem> = {
  args: {
    status: IRequestBeerStatus.PENDING,
  },
};

export const 등록완료: ComponentStoryObj<typeof RequestedBeerItem> = {
  args: {
    status: IRequestBeerStatus.APPROVED,
    requestCompletedAt: '2022-06-21T02:55:12.151Z',
  },
};

export const 반려: ComponentStoryObj<typeof RequestedBeerItem> = {
  args: {
    status: IRequestBeerStatus.REJECTED,
    requestCompletedAt: '2022-06-21T02:55:12.151Z',
  },
};
