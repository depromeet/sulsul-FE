import React, { useState } from 'react';
import styled from '@emotion/styled';
import { RecoilRoot } from 'recoil';

import SearchInput from './SearchInput';

import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';
import SearchList from '@/components/search/SearchList';

const StyledSearchContainer = styled.div`
  & > .search-page-header {
    border-bottom: 1px solid ${(p) => p.theme.semanticColor.secondary};
    margin-bottom: 15px;
  }
`;

const SearchContainer: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <StyledSearchContainer>
      <Header leftExtras={<BackButton />} className="search-page-header">
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
      </Header>
      <SearchList type="history" searchText={searchText} />
    </StyledSearchContainer>
  );
};

const SearchContainerWrapper: React.FC = () => {
  return (
    <RecoilRoot>
      <SearchContainer />
    </RecoilRoot>
  );
};

export default SearchContainerWrapper;
