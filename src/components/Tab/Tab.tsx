import { useState, useEffect, ReactChild } from 'react';
import styled from '@emotion/styled';
import { Carousel, CarouselProps } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { ColorTheme } from '@/themes/types';

const carouselInitialProps: Partial<CarouselProps> = {
  showArrows: false,
  showStatus: false,
  showIndicators: false,
};

type TabType = 'primary' | 'secondary';
type TabSize = 'small' | 'large';

interface TabProps {
  tabItems: string[];
  children: ReactChild[] | undefined;
  defaultActivatedIndex?: number;
  /** 탭 타입 (default: 'primary') */
  type?: TabType;
  /** 고스트 타입 여부 (default:false) */
  isGhost?: boolean;
  /** 탭 사이즈 (default:'small') */
  size?: TabSize;
  /** 스와이프 가능 여부 (default:false) */
  isSwipable?: boolean;
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (activatedIndex: number) => void;
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.div<Pick<TabProps, 'size'>>`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  padding: ${(p) => (p.size ? '12px 20px;' : '8px 20px;')};
  overflow-x: scroll;
`;

const StyledCarousel = styled(Carousel)`
  width: 100%;
  flex: 1;
`;

const getTabButtonBackgroundColor = ({
  type,
  isSelected,
  theme,
  isGhost,
}: {
  isSelected: boolean;
  theme: ColorTheme;
} & Pick<TabProps, 'type' | 'isGhost'>) => {
  if (isGhost && !isSelected) return 'transparent';

  if (type === 'primary') {
    return isSelected ? theme.semanticColor.primary : theme.color.whiteOpacity20;
  }
  return isSelected ? theme.semanticColor.secondary : theme.color.whiteOpacity20;
};

const getTabButtonColor = ({
  type,
  isSelected,
  theme,
  isGhost,
}: {
  isSelected: boolean;
  theme: ColorTheme;
} & Pick<TabProps, 'type' | 'isGhost'>) => {
  if (isGhost && !isSelected) return theme.color.whiteOpacity50;

  if (type === 'primary') {
    return isSelected ? theme.color.whiteOpacity80 : theme.color.white;
  }
  return isSelected ? theme.color.black80 : theme.color.whiteOpacity80;
};

const StyledTabButton = styled.button<
  { isSelected: boolean; tabType: TabType } & Pick<TabProps, 'isGhost' | 'size'>
>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: fit-content;
  height: ${(p) => (p.size === 'large' ? '36px' : '29px')};
  border-radius: ${(p) => (p.size === 'large' ? '20px' : '25px')};
  padding: 0 24px;

  font-weight: ${(p) => (p.size === 'large' ? '600' : '500')};
  font-size: ${(p) => (p.size === 'large' ? '15px' : '14px')};
  line-height: ${(p) => (p.size === 'large' ? '18px' : '17px')};

  background-color: ${(p) => getTabButtonBackgroundColor({ ...p, type: p.tabType })};
  color: ${(p) => getTabButtonColor({ ...p, type: p.tabType })};
  ${(p) =>
    `border: 1px solid ${
      p.isGhost && !p.isSelected ? p.theme.color.whiteOpacity65 : 'transparent'
    };`};

  & + button {
    margin-left: 10px;
  }
`;

const Tab = ({
  tabItems = [],
  children,
  defaultActivatedIndex = 0,
  type = 'primary',
  isGhost = false,
  size = 'small',
  isSwipable = false,
  className,
  onChange = () => null,
}: TabProps) => {
  const [activatedIndex, setActivatedIndex] = useState(defaultActivatedIndex);

  useEffect(() => {
    setActivatedIndex(defaultActivatedIndex);
  }, [defaultActivatedIndex]);

  useEffect(() => {
    onChange(activatedIndex);
  }, [activatedIndex, onChange]);

  return (
    <StyledWrapper className={className}>
      <StyledHeader size={size}>
        {tabItems.map((tabItem, index) => (
          <StyledTabButton
            key={tabItem}
            isSelected={activatedIndex === index}
            onClick={() => setActivatedIndex(index)}
            tabType={type}
            isGhost={isGhost}
            size={size}
          >
            {tabItem}
          </StyledTabButton>
        ))}
      </StyledHeader>
      <StyledCarousel
        {...carouselInitialProps}
        emulateTouch={isSwipable}
        selectedItem={activatedIndex}
        onChange={setActivatedIndex}
      >
        {children}
      </StyledCarousel>
    </StyledWrapper>
  );
};

export default Tab;
