import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerSearchResultEmpty from './BeerSearchResultEmpty';

export default {
  title: 'Components/BeerSearchResultEmpty',
  component: BeerSearchResultEmpty,
  args: {
    title: `“독일”\n맥주를 찾을 수 없어요.`,
    subtitle: `잘못된 검색어를 입력하였거나,\n등록되지 않은 맥주예요.`,
  },
} as ComponentMeta<typeof BeerSearchResultEmpty>;

const Template: ComponentStory<typeof BeerSearchResultEmpty> = (args) => (
  <BeerSearchResultEmpty {...args} />
);

export const Default = Template.bind({});
