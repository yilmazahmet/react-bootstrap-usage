import React from 'react'
import BasicExample from '../components/contactForm'
import { Container } from 'react-bootstrap'
import PageBanner from '../components/banners'

function Contact() {
  return (
    <Container>
      <PageBanner />
      <BasicExample />

    </Container>
  )
}

export default Contact