import Carousel from 'react-bootstrap/Carousel';
import Home from './Home';

function CarouselHome() {
  return (
    <>
   <Home /> 
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th-thumbnailer.cdn-si-edu.com/V3TK_LZmceCydRkcC-aUXAzfCl4=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/ed/d2/edd29231-3bb6-4e90-8acf-baf37b0078f9/janes_carousel_nyc_046.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.gannett-cdn.com/-mm-/fc2b5c59697b0b247df1a059054822e2fdb29200/c=0-132-2000-1262/local/-/media/USATODAY/USATODAY/2013/08/29/1377788502008-SF-01.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default CarouselHome;