import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import RequestedBeerItem from './RequestedBeerItem';

export default {
  title: 'Components/RequestedBeerItem',
  component: RequestedBeerItem,
  args: {
    beerNameKor: '하이네켄 벚꽃 맥주',
    createdAt: new Date(),
  },
} as ComponentMeta<typeof RequestedBeerItem>;

export const 심사중: ComponentStoryObj<typeof RequestedBeerItem> = {
  args: {
    status: 'pending',
  },
};

export const 등록완료: ComponentStoryObj<typeof RequestedBeerItem> = {
  args: {
    status: 'approved',
    completedAt: new Date(),
  },
};

export const 반려: ComponentStoryObj<typeof RequestedBeerItem> = {
  args: {
    status: 'rejected',
    completedAt: new Date(),
  },
};
