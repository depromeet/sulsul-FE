import { Carousel, CarouselProps } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const carouselInitialProps: Partial<CarouselProps> = {
  showArrows: false,
  showStatus: false,
  showIndicators: false,
  showThumbs: false,
  emulateTouch: true,
};

const Swiper = (props: Partial<CarouselProps>) => {
  return <Carousel {...carouselInitialProps} {...props} />;
};

export default Swiper;
