import Carousel from 'react-bootstrap/Carousel';
import sliderImage1 from '../assets/carousel.jpg';

function DarkVariantExample() {
  return (
    <Carousel className='carousel' data-bs-theme="dark">
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={sliderImage1}
          alt="First slide" fluid
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderImage1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderImage1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;