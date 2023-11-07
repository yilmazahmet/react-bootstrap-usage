import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import GalleryImg from '../assets/gallery.png'

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4} style={{paddingBottom:7}}>
          <Image src={GalleryImg} fluid rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={GalleryImg} fluid rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={GalleryImg} fluid rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={GalleryImg} fluid roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src={GalleryImg} fluid roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src={GalleryImg} fluid roundedCircle />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;