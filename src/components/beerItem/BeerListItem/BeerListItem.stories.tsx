import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import BeerListItem from './BeerListItem';

export default {
  title: 'Components/BeerListItem',
  component: BeerListItem,
  argTypes: {
    isLiked: { control: 'radio', options: [true, false] },
    feel: { control: 'radio', options: [5, 4, 3, 2, 1, null] },
  },
} as ComponentMeta<typeof BeerListItem>;

const Template: ComponentStory<typeof BeerListItem> = (args) => (
  <Container>
    <BeerListItem {...args} />
  </Container>
);

export const DefulteerListItem = Template.bind({});
DefulteerListItem.args = {
  country: {
    id: 1,
    name: '일본',
    continent: {
      id: 1,
      name: '아시아',
    },
  },
  type: 'LARGER',
  name: '삿포로',
  imageUrl: 'https://ifh.cc/g/X6B8Ra.png',
  alcohol: 5.0,
  feel: 5,
  isLiked: false,
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
