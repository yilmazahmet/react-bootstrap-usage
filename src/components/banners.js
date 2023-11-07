import React from 'react'
import bannerImage from '../assets/carousel.jpg'
import { Container } from 'react-bootstrap'

const PageBanner = () => {
    return (
        <Container fluid>
            <img src={bannerImage} alt='bannerlar' fluid width={'100%'} height={'150'}></img>
        </Container>
    )
}

export default PageBanner;