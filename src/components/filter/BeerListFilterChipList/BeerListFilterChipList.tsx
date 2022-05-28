import styled from '@emotion/styled';

import Chip from '@/components/Chip';
import { hideScrollbar } from '@/styles/common';

export type BeerListFilterChipType = {
  id: number | string;
  text: string;
  type: 'beerType' | 'country';
};

interface BeerListFilterChipListPros {
  filterChips: BeerListFilterChipType[];
  onRemove: (chip: BeerListFilterChipType) => void;
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  overflow-x: auto;
  overflow-y: hidden;

  ${hideScrollbar};
`;

const BeerListFilterChipList = ({ filterChips = [], onRemove }: BeerListFilterChipListPros) => {
  return (
    <StyledWrapper>
      {filterChips.map((chip) => (
        <Chip key={`${chip.id}-${chip.type}`} text={chip.text} onClose={() => onRemove(chip)} />
      ))}
    </StyledWrapper>
  );
};

export default BeerListFilterChipList;
