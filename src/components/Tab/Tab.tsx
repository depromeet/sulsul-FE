import { useState, useEffect, ReactChild, useRef, useCallback } from 'react';
import styled from '@emotion/styled';

import { ColorTheme } from '@/themes/types';

type TabType = 'primary' | 'secondary';
type TabSize = 'small' | 'large';

interface TabProps {
  tabItems: string[];
  children?: ReactChild | ReactChild[];
  /** 컴포넌트 외부에서 activatedIndex를 제어할 수 있게 하기 위한 속성  */
  outerActivatedIndex?: number;
  /** 탭 타입 (default: 'primary') */
  type?: TabType;
  /** 고스트 타입 여부 (default:false) */
  isGhost?: boolean;
  /** 탭 사이즈 (default:'small') */
  size?: TabSize;
  className?: string;
  onChange?: (activatedIndex: number) => void;
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTabList = styled.ul<Pick<TabProps, 'size'>>`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  padding: ${(p) => (p.size ? '12px 20px;' : '8px 20px;')};
  overflow-x: scroll;
`;

const getTabItemBackgroundColor = ({
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

const getTabItemColor = ({
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

const StyledTabItem = styled.li<
  { isSelected: boolean; tabType: TabType } & Pick<TabProps, 'isGhost' | 'size'>
>`
  flex: 1;
  min-width: fit-content;
  height: ${(p) => (p.size === 'large' ? '36px' : '29px')};
  border-radius: ${(p) => (p.size === 'large' ? '20px' : '25px')};
  ${(p) =>
    `border: 1px solid ${
      p.isGhost && !p.isSelected ? p.theme.color.whiteOpacity65 : 'transparent'
    };`};
  background-color: ${(p) => getTabItemBackgroundColor({ ...p, type: p.tabType })};
  color: ${(p) => getTabItemColor({ ...p, type: p.tabType })};

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    padding: 0 24px;

    font-weight: ${(p) => (p.size === 'large' ? '600' : '500')};
    font-size: ${(p) => (p.size === 'large' ? '15px' : '14px')};
    line-height: ${(p) => (p.size === 'large' ? '18px' : '17px')};

    color: inherit;
  }

  & + li {
    margin-left: 10px;
  }
`;

const Tab = ({
  tabItems = [],
  children,
  outerActivatedIndex = 0,
  type = 'primary',
  isGhost = false,
  size = 'small',
  className,
  onChange = () => null,
}: TabProps) => {
  const [activatedIndex, setActivatedIndex] = useState(outerActivatedIndex);

  const tabListRef = useRef<HTMLUListElement>(null);
  const tabItemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    setActivatedIndex(outerActivatedIndex);
  }, [outerActivatedIndex]);

  const scrollToActivatedTabItem = useCallback(() => {
    const activatedTabItem = tabItemRefs.current[activatedIndex];

    if (!activatedTabItem || !tabListRef.current) return;

    const isFirstTab = activatedIndex === 0;
    const isLastTab = activatedIndex === tabItems.length - 1;

    tabListRef.current.scrollTo({
      left: isFirstTab
        ? 0
        : isLastTab
        ? tabListRef.current.scrollWidth
        : activatedTabItem.offsetLeft,
      behavior: 'smooth',
    });
  }, [activatedIndex, tabItems]);

  useEffect(() => {
    onChange(activatedIndex);

    const intersectionObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.intersectionRatio < 1) {
        scrollToActivatedTabItem();
      }
    });

    const activatedTabItem = tabItemRefs.current[activatedIndex];

    activatedTabItem && intersectionObserver.observe(activatedTabItem);

    /** tabListRef 스크롤시에는 활성화된 탭버튼으로 자동 스크롤되지 않도록 막아야한다. */
    tabListRef.current?.addEventListener('scroll', () => {
      intersectionObserver.disconnect();
    });

    return () => intersectionObserver.disconnect();
  }, [activatedIndex, onChange, scrollToActivatedTabItem]);

  return (
    <StyledWrapper className={className}>
      <StyledTabList ref={tabListRef} size={size}>
        {tabItems.map((tabItem, index) => {
          const isSelected = activatedIndex === index;
          return (
            <StyledTabItem
              ref={(element) => (tabItemRefs.current[index] = element)}
              key={tabItem}
              isSelected={isSelected}
              aria-checked={isSelected}
              onClick={() => setActivatedIndex(index)}
              tabType={type}
              isGhost={isGhost}
              size={size}
            >
              <button>{tabItem}</button>
            </StyledTabItem>
          );
        })}
      </StyledTabList>
      {/**
       * 배열인 경우 activatedIndex번째의 children을 렌더링하고,
       * 배열이 아닌 경우 children을 그대로 랜더링한다. */}
      {Array.isArray(children) ? children[activatedIndex] : children}
    </StyledWrapper>
  );
};

export default Tab;
