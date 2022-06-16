import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { useSearchHistory } from '@/hooks';
import Icon from '@/components/commons/Icon';

interface SearchInputProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const StyledSearchInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  & form {
    width: 100%;

    & .search-input {
      ${({ theme }) => theme.fonts.SubTitle1};
      color: ${({ theme }) => theme.color.white};
      padding: 20px 10px;
      width: 100%;
    }
  }
`;

const SearchInput: React.FC<SearchInputProps> = ({ searchText, setSearchText }) => {
  const router = useRouter();
  const { addSearchHistory } = useSearchHistory();

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
    setSearchText(e.target.value);
  }, []);

  const handleReset = useCallback(() => {
    setSearchText('');
  }, []);

  const handleSubmit = useCallback<React.FormEventHandler>(
    (e) => {
      e.preventDefault();
      addSearchHistory(searchText);
      router.push(`/beers?query=${encodeURI(searchText)}`);
    },
    [addSearchHistory, searchText],
  );

  return (
    <StyledSearchInput onSubmit={handleSubmit}>
      <form onSubmit={handleSubmit}>
        <input type="text" className="search-input" onChange={handleChange} value={searchText} />
      </form>
      {searchText && (
        <button onClick={handleReset}>
          <Icon name="XCircle" size={20} />
        </button>
      )}
    </StyledSearchInput>
  );
};

export default SearchInput;
