import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Beers } from '@/constants/Beers';
import { Top3BeerFlavorList } from '@/constants/Top3BeerFlavorList';
import { Reviews } from '@/constants/Reviews';
import BeerDetailContainer from './BeerDetailContainer';

export default {
  title: 'Pages/맥주 상세정보',
  component: BeerDetailContainer,
} as ComponentMeta<typeof BeerDetailContainer>;

const Template: ComponentStory<typeof BeerDetailContainer> = (args) => (
  <BeerDetailContainer {...args} />
);

export const 맥주_상세정보 = Template.bind({});
맥주_상세정보.args = {
  beerResponse: { ...Beers[0] },
  top3BeerFlavor: { ...Top3BeerFlavorList },
};

맥주_상세정보.story = {
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
