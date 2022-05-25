import styled from '@emotion/styled';

import BottomSheet from '../BottomSheet';
import Icon from '../commons/Icon';
import {
  BeerListSortType,
  beerListSortTypeTextAlias,
} from '../BeerListFilterAndSorter/BeerListFilterAndSorter';

import { theme } from '@/themes';

interface BeerListSortBottomSheetProps {
  sortType: BeerListSortType;
  open: boolean;
  onClose: VoidFunction;
  onItemClick: (sortType: BeerListSortType) => void;
}

const StyledWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const SortTypeItem = styled.li<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  p {
    ${(p) => p.theme.fonts.SubTitle2};
    color: ${(p) => (p.isSelected ? p.theme.color.yellow : p.theme.color.whiteOpacity50)};
    padding: 0 10px;
    margin-left: 30px;
  }

  + li {
    margin-top: 25px;
  }
`;

const BeerListSortBottomSheet = ({
  sortType: currentSortType,
  open,
  onClose,
  onItemClick,
}: BeerListSortBottomSheetProps) => {
  return (
    <BottomSheet open={open} onClose={onClose}>
      <StyledWrapper>
        {Object.entries(beerListSortTypeTextAlias).map(([sortType, sortText]) => {
          const isSelected = sortType === currentSortType;
          return (
            <SortTypeItem
              key={sortType}
              aria-checked={isSelected}
              isSelected={isSelected}
              onClick={() => onItemClick(sortType as BeerListSortType)}
            >
              <p>{sortText}</p>
              <Icon
                name="Check"
                size={30}
                color={isSelected ? theme.color.yellow : 'transparent'}
                aria-hidden={true}
              />
            </SortTypeItem>
          );
        })}
      </StyledWrapper>
    </BottomSheet>
  );
};

export default BeerListSortBottomSheet;
