import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Beers } from '@/constants/Beers';

import backgroundImage from '../../../.storybook/assets/beer_background.png';
import BeerTicketTitle from './BeerTicketTitle';

export default {
  title: 'Components/BeerTicketTitle',
  component: BeerTicketTitle,
} as ComponentMeta<typeof BeerTicketTitle>;

const Template: ComponentStory<typeof BeerTicketTitle> = (args) => <BeerTicketTitle {...args} />;

export const BasicBeerTicketTitle = Template.bind({});
BasicBeerTicketTitle.args = {
  beer: Beers[0],
};

export const BackgroundBeerTicketTitle = Template.bind({});
BackgroundBeerTicketTitle.args = {
  beer: Beers[0],
  background: backgroundImage as unknown as string,
};
