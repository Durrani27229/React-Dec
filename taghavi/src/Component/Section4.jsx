import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const Section4 = () => {
  return (
   <Container fluid className='mt-5'>
    <Row>
        <Col md={5} lg={5} xl={5} xxl={5}>
            <div className='section4-content1'>
                <p className='fw-700 fony-play fs-22 sec4-content'>Why Choose Taghavi</p>
                <p className='fs-56 fw-700 lh-1 font-play sec4-head'>Taghavi 100,000+ Visa's <br /> Approved And Counting</p>
            
                <p className='font-mulish fs-20 sec4-content'>Join the thousands who trust Taghavi for their immigration needs. With over 100,000 visas approved, we deliver success through expertise, dedication, and personalized service.</p>
                <button className="section4-btn font-sans">See What you get with taghavi</button>
            </div>
        </Col>
        <Col md={7} lg={7} xl={7} xxl={7}>
            <div className='section4-main'>
                <div className='section4-img'>
                    <img src="../../public/Section4.png"  alt="" />
                </div>
                <div className='section4-content2 '>
                    <p className='font-mulish fs-18 sec4-content' >Worth every penny! Taghavi’s thorough checks and organized process made everything incredibly simple. Their team was always available for quick responses, and having the opportunity to consult directly with an attorney during critical steps brought invaluable peace of mind.</p>
                    <p className='font-mulish fs-22 fw-600 sec4-head2'>Kimberly Mastrangelo, December 2024</p>
                    <button className="section4-btn font-sans">Read Our Customer Stories</button>
                </div>
            </div>
        </Col>
    </Row>
   </Container>
  )
}

export default Section4
