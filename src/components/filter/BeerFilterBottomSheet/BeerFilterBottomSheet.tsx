import { useState } from 'react';
import styled from '@emotion/styled';

import FilterFooter from '../FilterFooter';
import BeerStyleFilterList from '../BeerStyleFilterList';
import BeerCountryFilterList from '../BeerCountryFilterList';

import { XIcon } from '@/assets/icon';
import Tab from '@/components/Tab';
import BottomSheet from '@/components/BottomSheet';
import Swiper from '@/components/Swiper';

interface BeerFilterBottomSheetProps {
  open: boolean;
  onClose: () => void;
  onApplyClick: () => void;
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

  .close-button {
    svg {
      width: 30px;
      height: 30px;
      fill: ${(p) => p.theme.color.white};
    }
  }

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

const countryTabItems = ['전체', '아시아', '유럽', '북아메리카', '남아메리카', '호주'];

const StyledSwiper = styled(Swiper)`
  flex: 1;
  overflow-y: auto;

  .carousel-slider,
  .slider-wrapper,
  .slider,
  .slide {
    height: 100%;
  }
`;

const BeerCountryFilterTab = () => {
  const [activatedIndex, setActivatedIndex] = useState(0);
  const [selectedCountryIds, setSelectedCountryIds] = useState<number[]>([]);

  return (
    <Tab
      tabItems={countryTabItems}
      size="small"
      type="primary"
      isGhost
      outerActivatedIndex={activatedIndex}
      onChange={setActivatedIndex}
    >
      <StyledSwiper selectedItem={activatedIndex} onChange={setActivatedIndex}>
        {Array(countryTabItems.length)
          .fill(0)
          .map((_, index) => (
            <BeerCountryFilterList
              key={index}
              continent={{ id: index, name: countryTabItems[index] }}
              hasSelectAllButton={index !== 0}
              selectedCountryIds={selectedCountryIds}
              setSelectedCountryIds={setSelectedCountryIds}
            />
          ))}
      </StyledSwiper>
    </Tab>
  );
};

const BeerFilterBottomSheet = ({ open, onClose, onApplyClick }: BeerFilterBottomSheetProps) => {
  const onClear = () => null;

  return (
    <StyledBottomSheet open={open} onClose={onClose} isFull>
      <StyledHeader>
        <button className="close-button" type="button" aria-label="닫기" onClick={onClose}>
          <XIcon />
        </button>
        <button className="clear-button" type="button" onClick={onClear}>
          초기화
        </button>
      </StyledHeader>
      <StyledTab tabItems={['종류', '나라']} type="primary" size="large">
        <BeerStyleFilterList />
        <BeerCountryFilterTab />
      </StyledTab>
      <FilterFooter onApplyClick={onApplyClick} />
    </StyledBottomSheet>
  );
};

export default BeerFilterBottomSheet;
