import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { isNil } from 'lodash';
import { MouseEvent, useEffect } from 'react';

import Icon from '../commons/Icon';
import Header from '../Header';
import { BackButton, ListViewToggleButton } from '../Header/extras';

import { ellipsis } from '@/styles/common';
import {
  $beerListViewType,
  BEER_LIST_VIEW_ATOM_KEY,
} from '@/containers/BeerListContainer/recoil/atoms';
import QueryParams from '@/utils/query-params';

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

const BeerListViewToggleButton = () => {
  const [beerListViewType, setBeerListViewType] = useRecoilState($beerListViewType);

  useEffect(() => {
    const paramValue = QueryParams.get(BEER_LIST_VIEW_ATOM_KEY);
    paramValue && setBeerListViewType(paramValue);
  }, [setBeerListViewType]);

  return <ListViewToggleButton type={beerListViewType} onChange={setBeerListViewType} />;
};

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
