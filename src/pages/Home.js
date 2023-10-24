import Carousel from 'react-bootstrap/Carousel';
import sliderImage1 from '../assets/carousel.jpg'

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
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;