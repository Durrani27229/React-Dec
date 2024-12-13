import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const Section7 = () => {
  return (
    <Container className='mt-5'>
    <Row>
        <Col>
            <div className='section7'>
               <div>
                    <p className='fs-48 fw-700 text-center lh-1 font-play'>Dedicated. Considerate. <br />
                    Recognized.</p>
               </div>
               <div className='image-group'>
                    <img src="../../public/logo1.png" alt="" />
                    <img src="../../public/logo2.png" alt="" />
                    <img src="../../public/logo3.png" alt="" />
                    <img src="../../public/logo4.png" alt="" />
               </div>
            </div>
        </Col>
    </Row>
</Container>
  )
}

export default Section7
