import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerList from './BeerList';
import { Beers } from '@/constants/Beers';

export default {
  title: 'Components/BeerList',
  component: BeerList,
  argTypes: {
    type: { control: 'radio', options: ['grid', 'list'] },
  },
  args: {},
} as ComponentMeta<typeof BeerList>;

const Template: ComponentStory<typeof BeerList> = ({ ...args }) => (
  <Container>
    <BeerList {...args} />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

export const Default = Template.bind({});
Default.args = {
  beers: [...Beers],
};
