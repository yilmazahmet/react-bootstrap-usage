import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo-white.png'
import { Row, Col } from 'react-bootstrap';


function NavBar() {
    return (
        <>
            <Navbar sticky='top' bg="dark" data-bs-theme="dark">
                <Container className='d-flex'>
                    <Row>
                        <Col>
                            <Navbar.Brand href="/home"><img alt=""
                                src={Logo}
                                width="auto"
                                height="40"
                                className="d-inline-block align-top"></img>
                            </Navbar.Brand>
                        </Col>
                        <Col>
                            <Nav className="me-auto">
                                <Nav.Link href="/home">Anasayfa</Nav.Link>
                                <Nav.Link href="/about">Hakkımızda</Nav.Link>
                                <Nav.Link href="/contact">İletişim</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default NavBar;