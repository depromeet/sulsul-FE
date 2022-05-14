import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerCountryFilterList from './BeerCountryFilterList';

export default {
  title: 'Components/BeerCountryFilterList',
  component: BeerCountryFilterList,
  argTypes: {
    hasSelectAllButton: { control: 'boolean', defaultValue: true },
  },
} as ComponentMeta<typeof BeerCountryFilterList>;

const Template: ComponentStory<typeof BeerCountryFilterList> = (args) => (
  <BeerCountryFilterList {...args} />
);

export const Default = Template.bind({});
