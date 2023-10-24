import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import '../App.css'

function Footer() {
  return (
    <>
      <Container fluid className='footer'>
        <Row>
          <Col xl md sm xs={4}><Link to={'https://www.koduzmani.com'}>Ahmet Yılmaz 2023</Link></Col>
          <Col xl md sm xs={8}>Telefon</Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer