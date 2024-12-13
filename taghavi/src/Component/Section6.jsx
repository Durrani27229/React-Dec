import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const Section6 = () => {
  return (
    <Container className='mt-5'>
        <Row>
            <Col>
                <div className='section6'>
                    <p className='fs-48 fw-700 font-play'>Secure Your Free Evaluation Today!</p>
                    <p className='fs-18 font-mulish'>Take the first step toward your immigration goals. Schedule a no-obligation <br /> consultation with Taghavi Immigration Law and get expert guidance tailored to you.</p>
                    <div className='btn-group text-center'>
                        <button className='sec6-btn1 font-sans'>Let's Talk</button>
                        <button className='sec6-btn2 font-sans'>804-408-3522</button>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Section6
