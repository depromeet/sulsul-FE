import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import BeerListItem from './BeerListItem';
import { cloneDeep } from 'lodash';

import { Beers } from '@/constants/Beers';

export default {
  title: 'Components/BeerListItem',
  component: BeerListItem,
  argTypes: {
    isLiked: { control: 'radio', options: [true, false] },
    feel: { control: 'radio', options: [5, 4, 3, 2, 1, null] },
  },
} as ComponentMeta<typeof BeerListItem>;

const country = {
  id: 1,
  name: '한국',
  continent: {
    id: 1,
    name: '아시아',
  },
};

const Template: ComponentStory<typeof BeerListItem | any> = ({
  countryName,
  continentName,
  ...args
}) => {
  const _country = cloneDeep(country);

  _country.name = countryName;
  _country.continent.name = continentName;

  return (
    <Container>
      <BeerListItem country={_country} {...args} />
    </Container>
  );
};

export const DefulBeerListItem = Template.bind({});
DefulBeerListItem.args = {
  beer: { ...Beers[0] },
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;
