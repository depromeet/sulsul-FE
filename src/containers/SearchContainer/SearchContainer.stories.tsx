import { ComponentMeta, ComponentStory } from '@storybook/react';

import SearchContainer from './SearchContainer';

export default {
  title: 'Pages/검색 페이지',
  component: SearchContainer,
} as ComponentMeta<typeof SearchContainer>;

const Template: ComponentStory<typeof SearchContainer> = (args) => <SearchContainer {...args} />;

export const 검색_페이지 = Template.bind({});
검색_페이지.args = {};
