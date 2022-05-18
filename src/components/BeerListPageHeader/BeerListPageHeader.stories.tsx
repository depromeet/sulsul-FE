import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerListPageHeader from './BeerListPageHeader';

export default {
  title: 'Components/BeerListPageHeader',
  component: BeerListPageHeader,
  argTypes: {
    keyword: { control: 'text', defaultValue: '독일' },
  },
} as ComponentMeta<typeof BeerListPageHeader>;

const Template: ComponentStory<typeof BeerListPageHeader> = (args) => (
  <BeerListPageHeader {...args} />
);

export const Default = Template.bind({});
