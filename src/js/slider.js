import 'slick-carousel';

const defaultOptions = {
  dots: false,
  centerMode: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  infinite: false,
  draggable: false,
  autoplay: false,
  variableWidth: true
};

const createSlider = (sliderSelector, options = defaultOptions) => {
  sliderSelector.not('.slick-initialized').slick(options);
};

export default createSlider;