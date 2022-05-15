import React, { useState, useCallback, useEffect } from 'react';
import { CarouselProps } from 'react-responsive-carousel';
import styled from '@emotion/styled';
import cx from 'classnames';

import Swiper from '@/components/Swiper';

const StyledSwiperLayout = styled.section`
  position: relative;
  height: 100%;

  & > .swiper-section {
    height: 100%;
  }

  & > .swiper-layout-bottom {
    position: absolute;
    bottom: 20px;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    & .swiper-layout-bottom-step {
      display: block;
      background-color: ${({ theme }) => theme.color.whiteOpacity50};
      width: 8px;
      height: 8px;
      border-radius: 4px;
      transition: background 0.3s;

      &.active {
        background-color: ${({ theme }) => theme.color.white};
      }

      &:not(:last-child) {
        margin-right: 8px;
      }
    }

    /** 아이폰 하단 노치 영역 대응 */
    @supports (padding-bottom: env(safe-area-inset-bottom)) {
      padding-bottom: env(safe-area-inset-bottom);
    }
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
      <Swiper swipeable={false} selectedItem={pageIndex} className="swiper-section" {...props}>
        {React.Children.map(children, (child) => {
          return child
            ? React.createElement(child.type, {
                ...child.props,
                onMovePrev: handleMovePrev,
                onMoveNext: handleMoveNext,
              })
            : null;
        })}
      </Swiper>
      <div className="swiper-layout-bottom">
        {new Array(length).fill(null).map((_, i) => (
          <span
            key={i}
            className={cx(['swiper-layout-bottom-step', i === pageIndex && 'active'])}
          />
        ))}
      </div>
    </StyledSwiperLayout>
  );
};

export default SwiperLayout;
