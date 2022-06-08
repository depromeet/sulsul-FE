import { useMemo, useState } from 'react';
import styled from '@emotion/styled';

import BeerCountryFilterList from '../../BeerCountryFilterList';

import Tab from '@/components/Tab';
import Swiper from '@/components/Swiper';
import { useGetContinents } from '@/queries';

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

  const { data } = useGetContinents();

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

export default BeerCountryFilterTab;
