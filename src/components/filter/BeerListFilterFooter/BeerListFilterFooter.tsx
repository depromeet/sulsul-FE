import React from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import BeerListFilterChipList, { BeerListFilterChipType } from '../BeerListFilterChipList';
import {
  $nextBeerListFilter,
  $nextBeerListFilterChips,
} from '../BeerListFilterBottomSheet/recoil/atoms';

import Button from '@/components/commons/Button';

interface BeerListFilterFooterProps {
  onApplyClick: () => void;
}

const StyledWrapper = styled.section`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-top: 1px solid ${(p) => p.theme.semanticColor.secondary};

  background-color: ${(p) => p.theme.semanticColor.backgroundLow};

  /** 아이폰 하단 노치 영역 대응 */
  @supports (padding-bottom: env(safe-area-inset-bottom)) {
    padding-bottom: env(safe-area-inset-bottom);
  }

  .BeerListFilterFooter__button-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 80px;

    button {
      width: 240px;
    }
  }
`;

const BeerListFilterFooter = ({ onApplyClick }: BeerListFilterFooterProps) => {
  const [nextFilter, setNextFilter] = useRecoilState($nextBeerListFilter);
  const [nextFilterChips, setNextFilterChips] = useRecoilState($nextBeerListFilterChips);

  const handleRemoveFilterChip = (chip: BeerListFilterChipType) => {
    setNextFilter({
      ...nextFilter,
      ...(chip.type === 'country'
        ? { countryIds: nextFilter.countryIds?.filter((id) => id !== chip.id) }
        : { beerTypes: nextFilter.beerTypes?.filter((id) => id !== chip.id) }),
    });
    setNextFilterChips(nextFilterChips.filter((v) => !(v.id === chip.id && v.type === chip.type)));
  };

  return (
    <StyledWrapper>
      {!!nextFilterChips.length && (
        <BeerListFilterChipList filterChips={nextFilterChips} onRemove={handleRemoveFilterChip} />
      )}
      <div className="BeerListFilterFooter__button-wrapper">
        <Button type="primary" onClick={onApplyClick}>
          필터 적용
        </Button>
      </div>
    </StyledWrapper>
  );
};

export default BeerListFilterFooter;
