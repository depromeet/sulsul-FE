import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchItem from './SearchItem';

export default {
  title: 'Components/SearchItem',
  component: SearchItem,
  argTypes: {
    type: { control: 'radio', options: ['search', 'history'] },
    deleteButtonText: { control: 'text' },
    searchText: { control: 'text' },
    onClick: { control: 'readonly' },
  },
} as ComponentMeta<typeof SearchItem>;

const Template: ComponentStory<typeof SearchItem> = (args) => <SearchItem {...args} />;

export const DefaultSearchItem = Template.bind({});
DefaultSearchItem.args = {
  text: '독일 맥주',
  onClick: () => console.log('click'),
};

export const SearchHistoryItem = Template.bind({});
SearchHistoryItem.args = {
  text: '독일 맥주',
  type: 'history',
  hasDeleteButton: true,
  onClick: () => console.log('click'),
};
