import { ComponentStory, ComponentMeta } from '@storybook/react';

import useSearchHistory from '@/hooks/useSearchHistory';

import SearchList from './SearchList';

export default {
  title: 'Components/SearchList',
  component: SearchList,
  argTypes: {
    type: { control: 'radio', options: ['search', 'history'] },
  },
} as ComponentMeta<typeof SearchList>;

const Template: ComponentStory<typeof SearchList> = (args) => {
  const { searchHistories, addSearchHistory } = useSearchHistory();

  const handleAddHistory = () => {
    const createdHistoryName = `맥주-${Math.floor(Math.random() * 10_000)}-${
      searchHistories.length
    }`;

    addSearchHistory(createdHistoryName);
  };

  return (
    <>
      <SearchList {...args} />
      {args.type === 'history' && (
        <button type="button" onClick={handleAddHistory}>
          추가
        </button>
      )}
    </>
  );
};

export const DefaultSearchList = Template.bind({});
DefaultSearchList.args = {
  searchList: ['독일 맥주', '맥주'],
};

export const SearchHistoryItem = Template.bind({});
SearchHistoryItem.args = {
  type: 'history',
};
