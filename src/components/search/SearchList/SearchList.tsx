import React from 'react';
import styled from '@emotion/styled';

import SearchItem, { SearchIconType, DEFAULT_ICON_TYPE } from '../SearchItem';

import { useSearchHistory } from '@/hooks';

interface SearchListProps {
  type?: SearchIconType;
  searchList?: string[];
}

const SearchList: React.FC<SearchListProps> = ({ type = DEFAULT_ICON_TYPE, searchList }) => {
  const { searchHistories } = useSearchHistory();

  const renderedSearchList = searchList || searchHistories;

  return (
    <StyledSearchList>
      {renderedSearchList.map((item) => (
        <SearchItem key={item} text={item} type={type} hasDeleteButton={type === 'history'} />
      ))}
    </StyledSearchList>
  );
};

const StyledSearchList = styled.div``;

export default SearchList;
