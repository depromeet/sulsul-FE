import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerTypeFilterItem from './BeerTypeFilterItem';

export default {
  title: 'Components/BeerTypeFilterItem',
  component: BeerTypeFilterItem,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    imageUrl: { control: 'text' },
    isSelected: { control: 'boolean' },
    hasDivider: { control: 'boolean' },
  },
} as ComponentMeta<typeof BeerTypeFilterItem>;

const Template: ComponentStory<typeof BeerTypeFilterItem> = (args) => (
  <BeerTypeFilterItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: '필스너 필스너 필스너 필스너 필스너 필스너 필스너 필스너 필스너 필스너 ',
  description:
    '투명한 황금빛으로 단 맛과 쓴 맛이 어우러진 깔끔한 맛' +
    '투명한 황금빛으로 단 맛과 쓴 맛이 어우러진 깔끔한 맛' +
    '투명한 황금빛으로 단 맛과 쓴 맛이 어우러진 깔끔한 맛',
  imageUrl: '',
  isSelected: true,
};
