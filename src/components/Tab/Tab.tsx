import { useState, useEffect, ReactChild, useRef } from 'react';
import styled from '@emotion/styled';
import { Carousel, CarouselProps } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { ColorTheme } from '@/themes/types';

const carouselInitialProps: Partial<CarouselProps> = {
  showArrows: false,
  showStatus: false,
  showIndicators: false,
  showThumbs: false,
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

  const tabHeaderRef = useRef<HTMLDivElement>(null);
  const tabButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activatedTabButton = tabButtonRefs.current[activatedIndex];

  useEffect(() => {
    setActivatedIndex(defaultActivatedIndex);
  }, [defaultActivatedIndex]);

  const scrollToActivatedTabButton = () => {
    if (!activatedTabButton || !tabHeaderRef.current) return;

    const isFirstTab = activatedIndex === 0;
    const isLastTab = activatedIndex === tabItems.length - 1;

    tabHeaderRef.current.scrollTo({
      left: isFirstTab
        ? 0
        : isLastTab
        ? tabHeaderRef.current.scrollWidth
        : activatedTabButton.offsetLeft,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    onChange(activatedIndex);

    const intersectionObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.intersectionRatio < 1) {
        scrollToActivatedTabButton();
      }
    });

    activatedTabButton && intersectionObserver.observe(activatedTabButton);

    /** tabHeader 스크롤시에는 활성화된 탭버튼으로 자동 스크롤되지 않도록 막아야한다. */
    tabHeaderRef.current?.addEventListener('scroll', () => {
      intersectionObserver.disconnect();
    });

    return () => intersectionObserver.disconnect();
  }, [activatedIndex, onChange, tabButtonRefs]);

  return (
    <StyledWrapper className={className}>
      <StyledHeader ref={tabHeaderRef} size={size}>
        {tabItems.map((tabItem, index) => (
          <StyledTabButton
            ref={(element) => (tabButtonRefs.current[index] = element)}
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
