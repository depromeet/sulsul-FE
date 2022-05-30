import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerListFilterAndSorter from './BeerListFilterAndSorter';

export default {
  title: 'Components/BeerListFilterAndSorter',
  component: BeerListFilterAndSorter,
  args: {
    resultCount: 394,
    totalCount: 394,
  },
} as ComponentMeta<typeof BeerListFilterAndSorter>;

const Template: ComponentStory<typeof BeerListFilterAndSorter> = () => <BeerListFilterAndSorter />;

export const Default = Template.bind({});
