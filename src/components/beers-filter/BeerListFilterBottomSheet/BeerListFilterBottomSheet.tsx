import { useEffect } from 'react';
import styled from '@emotion/styled';
import { RecoilRoot, useRecoilState, useResetRecoilState } from 'recoil';

import BeerListFilterFooter from '../BeerListFilterFooter';
import BeerTypeFilterList from '../BeerTypeFilterList';
import BeerCountryFilterTab from './BeerCountryFilterTab';
import { $nextBeerListFilter, $nextBeerListFilterChips } from './recoil/atoms';
import { BeerListFilterChipType } from '../BeerListFilterChipList';

import Tab from '@/components/Tab';
import BottomSheet from '@/components/BottomSheet';
import Icon from '@/components/commons/Icon';
import { IBeerListFilter } from '@/apis';

const TAB_ITEMS = ['종류', '나라'];

interface BeerListFilterBottomSheetProps {
  open: boolean;
  defaultFilter?: IBeerListFilter;
  defaultFilerChips?: BeerListFilterChipType[];
  onClose: () => void;
  onApply: (nextFiler: IBeerListFilter, nextFilerChips: BeerListFilterChipType[]) => void;
}

const StyledBottomSheet = styled(BottomSheet)`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 46px;
  padding: 8px 20px;

  .clear-button {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    color: ${(p) => p.theme.color.whiteOpacity65};
  }
`;

const StyledTab = styled(Tab)`
  flex: 1;
  overflow: hidden;
`;

const BeerListFilterBottomSheet: React.FC<BeerListFilterBottomSheetProps> = ({
  open,
  defaultFilter,
  defaultFilerChips,
  onClose,
  onApply,
}) => {
  const [nextFiler, setNextFilter] = useRecoilState($nextBeerListFilter);
  const [nextFilterChips, setNextFilterChips] = useRecoilState($nextBeerListFilterChips);

  const resetNextFilter = useResetRecoilState($nextBeerListFilter);
  const resetNextFilterChips = useResetRecoilState($nextBeerListFilterChips);

  useEffect(() => {
    if (!defaultFilter || !defaultFilerChips) return;

    setNextFilter(defaultFilter);
    setNextFilterChips(defaultFilerChips);
  }, [open, defaultFilter, defaultFilerChips, setNextFilter, setNextFilterChips]);

  const clearNextFilter = () => {
    resetNextFilter();
    resetNextFilterChips();
  };

  const apply = () => {
    onApply(nextFiler, nextFilterChips);
    onClose();
  };

  return (
    <StyledBottomSheet open={open} onClose={onClose} isFull>
      <StyledHeader>
        <button className="close-button" type="button" aria-label="닫기" onClick={onClose}>
          <Icon name="X" color="white" />
        </button>
        <button className="clear-button" type="button" onClick={clearNextFilter}>
          초기화
        </button>
      </StyledHeader>
      <StyledTab tabItems={TAB_ITEMS} type="primary" size="large">
        <BeerTypeFilterList />
        <BeerCountryFilterTab />
      </StyledTab>
      <BeerListFilterFooter onApplyClick={apply} />
    </StyledBottomSheet>
  );
};

const BeerListFilterBottomSheetRecoilWrapper: React.FC<BeerListFilterBottomSheetProps> = (
  props,
) => {
  return (
    <RecoilRoot>
      <BeerListFilterBottomSheet {...props} />
    </RecoilRoot>
  );
};

export default BeerListFilterBottomSheetRecoilWrapper;
