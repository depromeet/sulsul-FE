import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import BeerListItem from './BeerListItem';
import { cloneDeep } from 'lodash';

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

export const DefulteerListItem = Template.bind({});
DefulteerListItem.args = {
  countryName: '한국',
  continentName: '아시아',
  type: '위트 에일',
  name: '제주 위트 에일',
  imageUrl: 'https://ifh.cc/g/X6B8Ra.png',
  alcohol: 4.5,
  feel: 5,
  isLiked: false,
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
