import styled from '@emotion/styled';

import BeerCountryFilterItem, { SelectAllButton } from '../BeerCountryFilterItem';

interface BeerCountryFilterListProps {
  selectedCountryIds: number[];
  setSelectedCountryIds: (selectedCountryIds: number[]) => void;
  /** 전체보기 버튼 여부 (default:false) */
  hasSelectAllButton?: boolean;
}

const MOCK_COUNTRIES = Array(29)
  .fill(0)
  .map((_, index) => ({
    id: index,
    name: '대한민국' + index,
    flagImageUrl: 'https://cdn.pixabay.com/photo/2016/05/30/15/33/julia-roberts-1424985_1280.png',
  }));

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 16px 12px;
  grid-template-columns: repeat(auto-fill, minmax(90px, auto));
  justify-items: center;
  padding: 16px 20px;
  height: 100%;

  overflow-y: auto;
`;

const BeerCountryFilterList = ({
  selectedCountryIds,
  setSelectedCountryIds,
  hasSelectAllButton = false,
}: BeerCountryFilterListProps) => {
  /** @todo 대륙 id 넘겨받아서 나라 리스트 가져오기, 상태관리 로직 추가 */

  const selectItem = (id: number) => {
    setSelectedCountryIds([...selectedCountryIds, id]);
  };

  const unselectItem = (id: number) => {
    const newSelectedCountryIds = selectedCountryIds.filter((countryId) => id !== countryId);
    setSelectedCountryIds(newSelectedCountryIds);
  };

  const selectAll = () => {
    /** @todo 전체 선택 api에 맞게 설정  */
    setSelectedCountryIds([]);
  };

  const handleItemClick = (id: number) => () => {
    const isSelected = selectedCountryIds.includes(id);
    isSelected ? unselectItem(id) : selectItem(id);
  };

  return (
    <StyledWrapper>
      {hasSelectAllButton && <SelectAllButton onClick={selectAll} />}
      {MOCK_COUNTRIES.map((country) => (
        <BeerCountryFilterItem
          key={country.id}
          {...country}
          isSelected={selectedCountryIds.includes(country.id)}
          onClick={handleItemClick(country.id)}
        />
      ))}
    </StyledWrapper>
  );
};

export default BeerCountryFilterList;
