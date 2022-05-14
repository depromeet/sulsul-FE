import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import BeerCountryFilterList from './BeerCountryFilterList';

export default {
  title: 'Components/BeerCountryFilterList',
  component: BeerCountryFilterList,
  argTypes: {
    hasSelectAllButton: { control: 'boolean', defaultValue: true },
  },
} as ComponentMeta<typeof BeerCountryFilterList>;

const Template: ComponentStory<typeof BeerCountryFilterList> = (args) => {
  const [selectedCountryIds, setSelectedCountryIds] = useState<number[]>([]);

  return (
    <BeerCountryFilterList
      {...args}
      selectedCountryIds={selectedCountryIds}
      setSelectedCountryIds={setSelectedCountryIds}
    />
  );
};

export const Default = Template.bind({});
