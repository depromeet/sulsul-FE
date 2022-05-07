import { useState, useEffect, ReactChild } from 'react';
import styled from '@emotion/styled';
import { Carousel, CarouselProps } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const carouselInitialProps: Partial<CarouselProps> = {
  showArrows: false,
  showStatus: false,
  showIndicators: false,
};

interface TabProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (activatedIndex: number) => void;
  tabItems: string[];
  children: ReactChild[] | undefined;
  defaultActivatedIndex?: number;
  /** 스와이프 가능 여부 (default:false) */
  isSwipable?: boolean;
  className?: string;
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-shrink: 0;
  padding: 12px 20px;
`;

const StyledCarousel = styled(Carousel)`
  width: 100%;
  flex: 1;
`;

const StyledTabButton = styled.button<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 36px;
  border-radius: 20px;

  font-weight: 600;
  font-size: 15px;
  line-height: 18px;

  background-color: ${(p) =>
    p.isSelected ? p.theme.semanticColor.secondary : p.theme.color.whiteOpacity20};
  color: ${(p) => (p.isSelected ? p.theme.color.black80 : p.theme.color.whiteOpacity80)};

  & + button {
    margin-left: 10px;
  }
`;

const Tab = ({
  onChange,
  tabItems = [],
  children,
  defaultActivatedIndex = 0,
  isSwipable = false,
  className,
}: TabProps) => {
  const [activatedIndex, setActivatedIndex] = useState(defaultActivatedIndex);

  useEffect(() => {
    setActivatedIndex(defaultActivatedIndex);
  }, [defaultActivatedIndex]);

  useEffect(() => {
    onChange(activatedIndex);
  }, [activatedIndex, onChange]);

  const handleTabChange = (index: number) => {
    setActivatedIndex(index);
  };

  return (
    <StyledWrapper className={className}>
      <StyledHeader>
        {tabItems.map((tabItem, index) => (
          <StyledTabButton
            key={tabItem}
            isSelected={activatedIndex === index}
            onClick={() => handleTabChange(index)}
          >
            {tabItem}
          </StyledTabButton>
        ))}
      </StyledHeader>
      <StyledCarousel
        {...carouselInitialProps}
        emulateTouch={isSwipable}
        selectedItem={activatedIndex}
        onChange={handleTabChange}
      >
        {children}
      </StyledCarousel>
    </StyledWrapper>
  );
};

export default Tab;
