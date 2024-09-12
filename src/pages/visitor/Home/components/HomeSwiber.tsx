import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App() {
  const settings = {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1.7,
    speed: 500,
    infinite: true,
    dots: false,
    arrows: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ maxWidth: '100vw', margin: 'auto',marginTop: '100px' }}> {/* Added container div with width */}
      <Slider {...settings} className="mySlider">
        <div style={{ padding: '0 10px' }}> {/* Added padding */}
          <img src="/public/images/home/swiper-1.jpeg" alt="Slide 1" style={{ width: '100%' }} />
        </div>
        <div style={{ padding: '0 10px' }}> {/* Added padding */}
          <img src="/public/images/home/swiper-1.jpeg" alt="Slide 1" style={{ width: '100%' }} />
        </div>
        <div style={{ padding: '0 10px' }}> {/* Added padding */}
          <img src="/public/images/home/swiper-1.jpeg" alt="Slide 1" style={{ width: '100%' }} />
        </div>
        
      </Slider>
    </div>
  );
}
