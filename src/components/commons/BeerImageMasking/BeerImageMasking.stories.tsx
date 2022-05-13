import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerImageMasking from './BeerImageMasking';

export default {
  title: 'Components/BeerImageMasking',
  component: BeerImageMasking,
  args: {},
} as ComponentMeta<typeof BeerImageMasking>;

const Template: ComponentStory<typeof BeerImageMasking> = ({ ...args }) => (
  <BeerImageMasking {...args} />
);

export const Default = Template.bind({});
Default.args = {};
