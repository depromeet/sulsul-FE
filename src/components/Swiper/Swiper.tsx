import { Carousel, CarouselProps } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const carouselInitialProps: Partial<CarouselProps> = {
  showArrows: false,
  showStatus: false,
  showIndicators: false,
  showThumbs: false,
  emulateTouch: true,
};

interface SwiperProps extends Partial<CarouselProps> {}

const Swiper = (props: SwiperProps) => {
  return <Carousel {...carouselInitialProps} {...props} />;
};

export default Swiper;
