import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import BeerCountryFilterList from './BeerCountryFilterList';

export default {
  title: 'Components/BeerCountryFilterList',
  component: BeerCountryFilterList,
  args: {
    continentId: 1,
  },
} as ComponentMeta<typeof BeerCountryFilterList>;

const Template: ComponentStory<typeof BeerCountryFilterList> = (args) => (
  <BeerCountryFilterList {...args} />
);

export const Default = Template.bind({});
