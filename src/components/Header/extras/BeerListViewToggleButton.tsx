import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';

import Icon from '@/components/commons/Icon';
import { $beerListViewType, BeerListViewType, BEER_LIST_VIEW_ATOM_KEY } from '@/recoil/atoms';
import QueryParams from '@/utils/query-params';

const StyledWrapper = styled.div`
  display: flex;

  > butto:first-of-type {
    margin-right: 8px;
  }
`;

const BeerListViewToggleButton = () => {
  const [type, setType] = useRecoilState($beerListViewType);

  useEffect(() => {
    const paramValue = QueryParams.get(BEER_LIST_VIEW_ATOM_KEY);
    paramValue && setType(paramValue);
  }, [setType]);

  const handleTypeChange = (value: BeerListViewType) => () => {
    setType(value);
  };

  const getIconColor = (isSelected: boolean) => {
    return isSelected ? 'white' : 'whiteOpacity35';
  };

  return (
    <StyledWrapper>
      <button type="button" aria-label="그리드 뷰로 보기" onClick={handleTypeChange('grid')}>
        <Icon name="GridView" color={getIconColor(type === 'grid')} />
      </button>
      <button type="button" aria-label="리스트 뷰로 보기" onClick={handleTypeChange('list')}>
        <Icon name="ListView" color={getIconColor(type === 'list')} />
      </button>
    </StyledWrapper>
  );
};

export default BeerListViewToggleButton;
