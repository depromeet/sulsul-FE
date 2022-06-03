import { ComponentMeta, ComponentStory } from '@storybook/react';
import BeerCountryFilterItem from './BeerCountryFilterItem';

export default {
  title: 'Components/BeerCountryFilterItem',
  component: BeerCountryFilterItem,
  argTypes: {
    name: {
      control: 'text',
      defaultValue: '대한민국',
    },
    flagImageUrl: {
      control: 'text',
      defaultValue: 'https://cdn.pixabay.com/photo/2016/05/30/15/33/julia-roberts-1424985_1280.png',
    },
    isSelected: {
      control: 'boolean',
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof BeerCountryFilterItem>;

const Template: ComponentStory<typeof BeerCountryFilterItem> = (args) => (
  <BeerCountryFilterItem {...args} />
);

export const Default = Template.bind({});
Default.args = {};
