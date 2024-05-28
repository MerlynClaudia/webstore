import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
//import Header from './components/Header';
//import Footer from './components/Footer';



const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    <p>Copyright &copy; WebStore {currentYear}</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer