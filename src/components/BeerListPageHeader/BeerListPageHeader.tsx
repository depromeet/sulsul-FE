import styled from '@emotion/styled';

import Icon from '../commons/Icon';
import Header from '../Header';
import { BackButton, ListViewToggleButton } from '../Header/extras';

import { ellipsis } from '@/styles/common';

const PLACEHOLDER_TEXT = '맥주 이름, 특징 검색';

interface BeerListPageHeaderProps {
  keyword?: string;
  onKeywordClear?: () => void;
}

const SearchBoxButton = styled.button<{ isPlaceHolder: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  padding: 10px 16px;

  background-color: ${(p) => p.theme.color.whiteOpacity20};

  > p {
    flex: 1;
    text-align: left;
    ${(p) => p.theme.fonts.SubTitle2};
    color: ${(p) => (p.isPlaceHolder ? p.theme.color.whiteOpacity35 : p.theme.color.white)};

    ${ellipsis()};
  }

  > .clear {
    width: 20px;
    height: 20px;
    margin-left: 16px;
  }
`;

const BeerListPageHeader = ({ keyword, onKeywordClear }: BeerListPageHeaderProps) => {
  const handleSearchBoxButtonClick = () => null;

  return (
    <Header leftExtras={<BackButton />} rightExtras={<ListViewToggleButton />}>
      <SearchBoxButton isPlaceHolder={!keyword} onClick={handleSearchBoxButtonClick}>
        <p>{keyword || PLACEHOLDER_TEXT}</p>
        {keyword && (
          <button className="clear" aria-label="검색어 초기화" onClick={onKeywordClear}>
            <Icon name="XCircle" size={20} />
          </button>
        )}
      </SearchBoxButton>
    </Header>
  );
};

export default BeerListPageHeader;
