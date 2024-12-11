import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { FaArrowRight } from "react-icons/fa";

const Section5 = () => {
  return (
   <Container className='mt-5'>
        <Row >
            <Col className='section5-color'>
            <div className="section5">
            <div className='section5-one '>
                    <button className='section5-btn mt-5'>   For Employers</button>
                    <p className='fs-48 fw-700 lh-1'>Employers, but make it Taghavhi</p>
                    <p className='fs-14  '>At Taghavi, our dedicated team of professionals is committed to simplifying your immigration process. With deep expertise and a personalized approach, we ensure every step is smooth, transparent, and efficient. Trust Taghavi’s Employers to provide the support, knowledge, and care you need to achieve your immigration goals with confidence.</p>
                    <button className='section2-btn2'>Schedule A Free Case Evalution</button>
            </div>
            <div className='section5-two mt-5'>
                    <p className='fs-28 mt-2'>Taghavi Corporate immigration solutions</p>
                    <div className='d-flex justify-content-between'>
                        <p className='fs-18 line-0'>All-in-one Platform</p>
                        <p><FaArrowRight /></p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='fs-18 line-0'>In-House legal Team</p>
                        <p><FaArrowRight /></p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='fs-18 line-0'>Proactive case Management</p>
                        <p><FaArrowRight /></p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='fs-18 line-0'>Empowered HRs </p>
                        <p><FaArrowRight /></p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='fs-18 line-0'>Enhanced Employee Experience</p>
                        <p><FaArrowRight /></p>
                    </div>
            
                </div>
            </div>
                
            </Col>
            <Col>
                <div className='section5-img'>
                    <img src="../../public/Section5.png"  alt="" />
                </div>
            </Col>
        </Row>
        <Row>
            <Col className='section5-color'>
            <div className="sec5-cart">
                <div className="emp-cart">
                    <div>
                        <img src="../../public/sec5-ic1.png" alt="" />
                    </div>
                    <div>
                        <p className='fs-28 lh-1'>Reduce Your Workload</p>
                        <p className='lh-1'> Lorem ipsum dolor sit amet, consectetur adipi</p>
                    </div>
                </div>
                <div className="emp-cart">
                    <div>
                        <img src="../../public/sec5-ic2.png" alt="" />
                    </div>
                    <div>
                        <p className='fs-28 lh-1'>Reduce Your Workload</p>
                        <p className='lh-1'> Lorem ipsum dolor sit amet, consectetur adipi</p>
                    </div>
                </div>
                <div className="emp-cart">
                    <div>
                        <img src="../../public/sec5-ic3.png" alt="" />
                    </div>
                    <div>
                        <p className='fs-28 lh-1'>Reduce Your Workload</p>
                        <p className='lh-1'> Lorem ipsum dolor sit amet, consectetur adipi</p>
                    </div>
                </div>
            </div>
            </Col>
        </Row>
   </Container>
  )
}

export default Section5
