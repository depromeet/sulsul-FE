import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { isNil } from 'lodash';
import { MouseEvent } from 'react';

import Icon from '../commons/Icon';
import Header from '../Header';
import { BackButton, BeerListViewToggleButton } from '../Header/extras';

import { ellipsis } from '@/styles/common';

const PLACEHOLDER_TEXT = '맥주 이름, 특징 검색';

const SearchBoxButton = styled.button<{ isPlaceHolder: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 8px;

  background-color: ${(p) => p.theme.color.whiteOpacity20};

  > p {
    flex: 1;
    height: 100%;
    padding: 10px 16px;
    text-align: left;
    ${(p) => p.theme.fonts.SubTitle2};
    color: ${(p) => (p.isPlaceHolder ? p.theme.color.whiteOpacity35 : p.theme.color.white)};

    ${ellipsis()};
  }

  > .clear {
    padding: 10px 16px 10px 0;

    > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const SearchBox = () => {
  const router = useRouter();
  const query = isNil(router.query.query) ? undefined : decodeURI(String(router.query.query));

  const handleSearchBoxClick = () => router.push('/beer-search');

  const handleClearButtonClick = (e: MouseEvent) => {
    e.stopPropagation();
    router.replace('/beers');
  };

  return (
    <SearchBoxButton isPlaceHolder={!query} onClick={handleSearchBoxClick}>
      <p>{query || PLACEHOLDER_TEXT}</p>
      {!!query && (
        <button className="clear" aria-label="검색어 초기화" onClick={handleClearButtonClick}>
          <Icon name="XCircle" size={20} />
        </button>
      )}
    </SearchBoxButton>
  );
};

const BeerListPageHeader = () => {
  return (
    <Header leftExtras={<BackButton />} rightExtras={<BeerListViewToggleButton />}>
      <SearchBox />
    </Header>
  );
};

export default BeerListPageHeader;
