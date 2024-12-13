import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { FaArrowRight } from "react-icons/fa"

const Section10 = () => {
  return (
    <Container className='section10-color mt-5'>
       <Row>
        <Col lg={7}>
        <div className='section10'>
            <div className="sec10-content">
                <p className='fs-42 fw-700 font-play'>Let's Connect to Discuss</p>
                <p className='fs-18 font-mulish'>Discover personalized immigration solutions tailored to your needs. <br /> Let Taghavi guide you every step toward achieving your goals.</p>
                <p className='font-mulish'><FaArrowRight className='fs-12' /> Discuss the visa options of interest to you</p>
                <p className='font-mulish'><FaArrowRight className='fs-12' /> Discuss the visa options of interest to you</p>
                <p className='font-mulish'><FaArrowRight className='fs-12' /> Discuss the visa options of interest to you</p>
                <p className='font-mulish'><FaArrowRight className='fs-12' /> Discuss the visa options of interest to you</p>
                <div className='btn-group '>
                        <button className='sec6-btn1 font-sans'>Let's Talk</button>
                        <button className='sec6-btn2 font-sans'>804-408-3522</button>
                    </div>
            </div>
            
       </div>
        </Col>
        <Col lg={5}>
        <div className="sec10-image mt-5">
                <img src="../../public/sec10Lady.png" className='img-fluid' alt="" />
        </div>
        </Col>
       </Row>
    </Container>
  )
}

export default Section10
