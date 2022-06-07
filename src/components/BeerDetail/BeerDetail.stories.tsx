import { EBeerType } from '@/apis';
import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Beers } from '@/constants/Beers';

import BeerDetail from './BeerDetail';

export default {
  title: 'Components/BeerDetail',
  component: BeerDetail,
  argTypes: {},
} as ComponentMeta<typeof BeerDetail>;

const Template: ComponentStory<typeof BeerDetail> = (args) => (
  <Container>
    <BeerDetail beerData={Beers[0]} />
  </Container>
);

const Container = styled.div`
  padding: 0 20px;
`;

export const DefaultBeerDetail = Template.bind({});
