import { Container, Row, Col } from 'react-bootstrap';
import ContactInfoImage from '../assets/gallery.png'
import { Link } from 'react-router-dom';

function BasicExample() {
    return (
        <Container xl lg xs={12} className='ContactInfoComponent justify-content-center d-flex mb-5'>
            <Row>
                <Col xl lg xs={4} className=' justify-content-center text-center'>
                    <Col>
                        <img src={ContactInfoImage} alt='' fluid width={'100'}></img>
                    </Col>
                    <Col>
                        <b>0535 013 66 61</b>
                    </Col>
                </Col>
                <Col xl lg xs={4} className=' justify-content-center text-center'>
                    <Col>
                        <img src={ContactInfoImage} alt='' fluid width={'100'}></img>
                    </Col>
                    <Col>
                        <b>Ahmet Yılmaz</b>
                    </Col>
                </Col>
                <Col xl lg xs={4} className=' justify-content-center text-center'>
                    <Col>
                        <img src={ContactInfoImage} alt='' fluid width={'100'}></img>
                    </Col>
                    <Col>
                        <b><Link to='https://www.github.com/yilmazahmet'>Github</Link></b>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}

export default BasicExample;