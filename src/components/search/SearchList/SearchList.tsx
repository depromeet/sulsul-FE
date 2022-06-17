import React from 'react';

import SearchItem, { SearchIconType, DEFAULT_ICON_TYPE } from '../SearchItem';

import { useSearchHistory } from '@/hooks';

interface SearchListProps {
  type?: SearchIconType;
  searchList?: string[];
  searchText?: string;
}

const SearchList: React.FC<SearchListProps> = ({
  type = DEFAULT_ICON_TYPE,
  searchList,
  searchText,
}) => {
  const { searchHistories } = useSearchHistory();

  const renderedSearchList = searchList || searchHistories;

  return (
    <div>
      {renderedSearchList.map((item) => (
        <SearchItem
          key={item}
          text={item}
          type={type}
          searchText={searchText}
          hasDeleteButton={type === 'history'}
        />
      ))}
    </div>
  );
};

export default SearchList;
