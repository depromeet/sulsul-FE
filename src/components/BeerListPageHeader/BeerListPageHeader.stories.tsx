import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerListPageHeader from './BeerListPageHeader';

export default {
  title: 'Components/BeerListPageHeader',
  component: BeerListPageHeader,
} as ComponentMeta<typeof BeerListPageHeader>;

const Template: ComponentStory<typeof BeerListPageHeader> = () => <BeerListPageHeader />;

export const Default = Template.bind({});
