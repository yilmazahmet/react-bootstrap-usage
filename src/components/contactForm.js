import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import contactImg from '../assets/contact-banner.webp';
import ContactInfo from '../components/contactInfos';

function BasicExample() {
  return (
    <Container className='contactForm'>
      <Col>
        <ContactInfo />
      </Col>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Adresiniz:</Form.Label>
              <Form.Control type="email" placeholder="E-Mail" />
              <Form.Text className="text-muted">
                E-Mail adresiniz gizli tutulacaktır.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Parola</Form.Label>
              <Form.Control type="password" placeholder="Parolanız" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Gönder
            </Button>
          </Form>
        </Col>
        <Col className='d-flex justify-content-center'>
          <img src={contactImg} width={'100%'} style={{ objectFit: 'fill', borderRadius: '20px' }} fluid alt='iletisim-formu-gorseli'></img>
        </Col>
      </Row>
    </Container>
  );
}

export default BasicExample;