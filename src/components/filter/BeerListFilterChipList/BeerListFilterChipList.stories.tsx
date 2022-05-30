import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerListFilterChipList from './BeerListFilterChipList';

import { EBeerType } from '@/apis';

export default {
  title: 'Components/BeerListFilterChipList',
  component: BeerListFilterChipList,
} as ComponentMeta<typeof BeerListFilterChipList>;

const Template: ComponentStory<typeof BeerListFilterChipList> = (args) => (
  <BeerListFilterChipList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  filterChips: [
    { id: 1, text: '아시아', type: 'country' },
    { id: EBeerType.PILSNER, text: '필스너', type: 'beerType' },
    { id: EBeerType.IPA, text: 'IPA', type: 'beerType' },
  ],
  onRemove: (chip) => alert(`${chip.id}, ${chip.type} 제거`),
};
