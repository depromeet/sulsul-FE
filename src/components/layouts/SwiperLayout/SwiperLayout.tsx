import React, { useState, useCallback, useEffect } from 'react';
import { CarouselProps } from 'react-responsive-carousel';
import styled from '@emotion/styled';
import cx from 'classnames';

import Swiper from '@/components/Swiper';

const SWIPER_INDICATOR_HEIGHT = 50;

const StyledSwiperLayout = styled.section`
  height: 100%;
`;

const StyledSwiper = styled(Swiper)`
  height: ${`calc(100% - ${SWIPER_INDICATOR_HEIGHT}px)`};

  .carousel-root,
  .swiper-section {
  }

  .carousel,
  .carousel-slider,
  .slider-wrapper,
  .slider,
  .slide {
    height: 100%;
  }
`;

const StyledSwiperIndicator = styled.div`
  position: absolute;
  width: 100%;
  height: ${SWIPER_INDICATOR_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: center;

  & .swiper-layout-bottom-step {
    display: block;
    background-color: ${({ theme }) => theme.color.whiteOpacity50};
    width: 8px;
    height: 8px;
    border-radius: 4px;
    transition: background-color 0.3s;

    &.active {
      background-color: ${({ theme }) => theme.color.white};
    }

    &:not(:last-child) {
      margin-right: 8px;
    }
  }

  padding-bottom: 20px;
  /** 아이폰 하단 노치 영역 대응 */
  @supports (padding-bottom: calc(env(safe-area-inset-bottom) + 20px)) {
    padding-bottom: calc(env(safe-area-inset-bottom) + 20px);
  }
`;

interface SwiperLayoutProps extends Partial<CarouselProps> {
  children?: JSX.Element[];
  triggerChange?: (pageIndex: number) => void;
  className?: string;
}

export interface SwiperLayoutChildProps {
  onMovePrev?: () => void;
  onMoveNext?: () => void;
}

const SwiperLayout: React.FC<SwiperLayoutProps> = ({
  children,
  triggerChange,
  className,
  ...props
}) => {
  const [pageIndex, setPageIndex] = useState(0);

  const length = children?.length || 0;

  const handleMovePrev = useCallback(() => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  }, [pageIndex]);

  const handleMoveNext = useCallback(() => {
    if (pageIndex < length - 1) {
      setPageIndex(pageIndex + 1);
    }
  }, [pageIndex, length]);

  useEffect(() => {
    triggerChange?.(pageIndex);
  }, [pageIndex, triggerChange]);

  return (
    <StyledSwiperLayout className={className}>
      <StyledSwiper swipeable={false} selectedItem={pageIndex} {...props}>
        {React.Children.map(children || undefined, (child) => {
          return child
            ? React.createElement(child.type, {
                ...child.props,
                onMovePrev: handleMovePrev,
                onMoveNext: handleMoveNext,
              })
            : null;
        })}
      </StyledSwiper>
      <StyledSwiperIndicator>
        {new Array(length).fill(null).map((_, i) => (
          <span
            key={i}
            className={cx(['swiper-layout-bottom-step', i === pageIndex && 'active'])}
          />
        ))}
      </StyledSwiperIndicator>
    </StyledSwiperLayout>
  );
};

export default SwiperLayout;
