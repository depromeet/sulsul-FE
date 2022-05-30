import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import BottomSheet from '../BottomSheet';
import Icon from '../commons/Icon';

import { theme } from '@/themes';
import {
  $beerListSortBy,
  BeerListSortType,
  beerListSortTypeTextAlias,
} from '@/containers/BeerListContainer/recoil/atoms';

interface BeerListSortBottomSheetProps {
  open: boolean;
  onClose: VoidFunction;
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

const BeerListSortBottomSheet = ({ open, onClose }: BeerListSortBottomSheetProps) => {
  const [beerListSortBy, setBeerListSortBy] = useRecoilState($beerListSortBy);

  const handleSortTypeItemClick = (sortBy: BeerListSortType) => {
    setBeerListSortBy(sortBy);
    onClose();
  };

  return (
    <BottomSheet open={open} onClose={onClose}>
      <StyledWrapper>
        {Object.entries(beerListSortTypeTextAlias).map(([sortBy, sortText]) => {
          const isSelected = sortBy === beerListSortBy;
          return (
            <SortTypeItem
              key={sortBy}
              aria-checked={isSelected}
              isSelected={isSelected}
              onClick={() => handleSortTypeItemClick(sortBy as BeerListSortType)}
            >
              <p>{sortText}</p>
              <Icon
                name="Check"
                size={30}
                style={{ fill: isSelected ? theme.color.yellow : 'transparent' }}
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
