import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import BeerCountryFilterList from './BeerCountryFilterList';

export default {
  title: 'Components/BeerCountryFilterList',
  component: BeerCountryFilterList,
} as ComponentMeta<typeof BeerCountryFilterList>;

const Template: ComponentStory<typeof BeerCountryFilterList> = (args) => {
  const [selectedCountryIds, setSelectedCountryIds] = useState<number[]>([]);

  return (
    <BeerCountryFilterList
      {...args}
      selectedCountryIds={selectedCountryIds}
      setSelectedCountryIds={setSelectedCountryIds}
      continent={{ id: 1, name: '아시아' }}
    />
  );
};

export const Default = Template.bind({});
