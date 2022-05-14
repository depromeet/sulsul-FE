import { Carousel, CarouselProps } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

/**
 * @docs https://github.com/leandrowd/react-responsive-carousel
 *
 * @note 미세한 움직임이 감지될 경우 스와이프 내의 클릭 이벤트가 잘 안먹힐 수 있다.
 * 따라서 default로 preventMovementUntilSwipeScrollTolerance를 true로 설정하여 미세한 움직임에는 스와이프가 반응하지 않도록 한다.
 * (preventMovementUntilSwipeScrollTolerance: swipeScrollTolerance 속성에 지정된 픽셀(default: 5) 이상 움직여야 스와이프가 동작하도록 하는 속성.)
 * */

const carouselInitialProps: Partial<CarouselProps> = {
  showArrows: false,
  showStatus: false,
  showIndicators: false,
  showThumbs: false,
  emulateTouch: true,
};

const Swiper = ({
  preventMovementUntilSwipeScrollTolerance = true,
  ...props
}: Partial<CarouselProps>) => {
  return (
    <Carousel
      {...carouselInitialProps}
      preventMovementUntilSwipeScrollTolerance={preventMovementUntilSwipeScrollTolerance}
      {...props}
    />
  );
};

export default Swiper;
