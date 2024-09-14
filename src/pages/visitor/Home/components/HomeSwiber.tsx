import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/swiper.css'; // Import custom CSS

const HomeSwiper = () => {
  const settings = {
    centerMode: true, // Enable center mode
    centerPadding: '10%', // Adjust padding to control the spacing around the center slide
    slidesToShow: 1.7, // Show more slides to the side of the center slide
    speed: 500,
    dots: false,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px', // Adjust for smaller screens
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-slide">
          <img src="images/home/swiper-1.png" alt="Slide 1" />
        </div>
        <div className="slider-slide">
          <img src="images/home/swiper-1.png" alt="Slide 2" />
        </div>
        <div className="slider-slide">
          <img src="images/home/swiper-1.png" alt="Slide 3" />
        </div>
        <div className="slider-slide">
          <img src="images/home/swiper-1.png" alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeSwiper;
