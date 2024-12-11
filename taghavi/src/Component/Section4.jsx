import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const Section4 = () => {
  return (
   <Container className='mt-5'>
    <Row>
        <Col md={12} lg={4} xl={5}>
            <div className='section4-content1'>
                <p className='fw-700'>Why Choose Taghavi</p>
                <p className='fs-48 fw-700 lh-1'>Taghavi 100,000+ Visa's <br /> Approved And Counting</p>
            
                <p>Join the thousands who trust Taghavi for their immigration needs. With over 100,000 visas approved, we deliver success through expertise, dedication, and personalized service.</p>
                <button className="section3-btn">See What you get with taghavi</button>
            </div>
        </Col>
        <Col md={12} lg={8} xl={7}>
            <div className='section4-main'>
                <div className='section4-img'>
                    <img src="../../public/Section4.png"  alt="" />
                </div>
                <div className='section4-content2'>
                    <p>Worth every penny! Taghavi’s thorough checks and organized process made everything incredibly simple. Their team was always available for quick responses, and having the opportunity to consult directly with an attorney during critical steps brought invaluable peace of mind.</p>
                    <p>Kimberly Mastrangelo, December 2024</p>
                    <button className="section3-btn">Read Our Customer Stories</button>
                </div>
            </div>
        </Col>
    </Row>
   </Container>
  )
}

export default Section4
