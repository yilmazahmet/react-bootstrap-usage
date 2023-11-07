import React from 'react'
import BasicExample from '../components/contactForm'
import { Container } from 'react-bootstrap'


function Contact() {
  return (
    <Container className='ContactPage'>
      <h1>İLETİŞİM</h1>
      <h3>Bize Ulaşın</h3>
      <BasicExample />
      <iframe className='map' title='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.32108284096!2d28.68252911175558!3d41.00537021237829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1699393010208!5m2!1str!2str" allowfullscreen='' loading='lazy' referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Container>
  )
}

export default Contact