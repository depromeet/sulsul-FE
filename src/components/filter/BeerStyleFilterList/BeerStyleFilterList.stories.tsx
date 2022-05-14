import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerStyleFilterList from './BeerStyleFilterList';

export default {
  title: 'Components/BeerStyleFilterList',
  component: BeerStyleFilterList,
} as ComponentMeta<typeof BeerStyleFilterList>;

const Template: ComponentStory<typeof BeerStyleFilterList> = () => <BeerStyleFilterList />;

export const Default = Template.bind({});
