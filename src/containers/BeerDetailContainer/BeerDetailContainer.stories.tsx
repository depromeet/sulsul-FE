import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerDetailContainer from './BeerDetailContainer';

export default {
  title: 'Pages/맥주 상세정보',
  component: BeerDetailContainer,
} as ComponentMeta<typeof BeerDetailContainer>;

const Template: ComponentStory<typeof BeerDetailContainer> = () => <BeerDetailContainer />;

export const Default = Template.bind({});

Default.story = {
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
