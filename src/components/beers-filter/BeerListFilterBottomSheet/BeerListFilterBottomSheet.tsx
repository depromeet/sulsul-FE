import { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';

import BeerListFilterFooter from '../BeerListFilterFooter';
import BeerTypeFilterList from '../BeerTypeFilterList';
import BeerCountryFilterList from '../BeerCountryFilterList';
import { $nextBeerListFilter, $nextBeerListFilterChips } from './recoil/atoms';

import Tab from '@/components/Tab';
import BottomSheet from '@/components/BottomSheet';
import Swiper from '@/components/Swiper';
import { getContinents } from '@/apis';
import { $beerListFilter, $beerListFilterChips } from '@/containers/BeerListContainer/recoil/atoms';
import Icon from '@/components/commons/Icon';

const TAB_ITEMS = ['종류', '나라'];

interface BeerListFilterBottomSheetProps {
  open: boolean;
  onClose: () => void;
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

const StyledSwiper = styled(Swiper)`
  flex: 1;
  overflow-y: auto;

  .carousel-slider,
  .slider-wrapper,
  .slider,
  .slide {
    height: 100%;
  }

  .slide {
    overflow-y: auto;
  }
`;

const BeerCountryFilterTab = () => {
  const [activatedIndex, setActivatedIndex] = useState(0);

  const { data } = useQuery('continents', getContinents, { cacheTime: Infinity });

  const continents = useMemo(
    () => [{ id: undefined, name: '전체' }, ...(data?.contents || [])],
    [data?.contents],
  );
  const continentTabItems = useMemo(() => continents.map(({ name }) => name), [continents]);

  return (
    <Tab
      tabItems={continentTabItems}
      size="small"
      type="primary"
      isGhost
      outerActivatedIndex={activatedIndex}
      onChange={setActivatedIndex}
    >
      <StyledSwiper selectedItem={activatedIndex} onChange={setActivatedIndex}>
        {Array(continents.length)
          .fill(0)
          .map((_, index) => (
            <BeerCountryFilterList key={index} continentId={continents[index].id} />
          ))}
      </StyledSwiper>
    </Tab>
  );
};

const BeerListFilterBottomSheet = ({ open, onClose }: BeerListFilterBottomSheetProps) => {
  const [filter, setFilter] = useRecoilState($beerListFilter);
  const [filterChips, setFilterChips] = useRecoilState($beerListFilterChips);
  const [nextFiler, setNextFilter] = useRecoilState($nextBeerListFilter);
  const [nextFilterChips, setNextFilterChips] = useRecoilState($nextBeerListFilterChips);

  useEffect(() => {
    setNextFilter(filter);
    setNextFilterChips(filterChips);
  }, [open, filter, setNextFilter, filterChips, setNextFilterChips]);

  const clearNextFilter = () => {
    setNextFilter({});
    setNextFilterChips([]);
  };

  const apply = () => {
    setFilter(nextFiler);
    setFilterChips(nextFilterChips);
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

export default BeerListFilterBottomSheet;
