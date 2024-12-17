import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { FaArrowRight } from "react-icons/fa";

const Section5 = () => {
  return (
   <Container fluid className='mt-5 section5-color'>
        <Row >
            <Col className=''>
            <div className="section5">
            <div className='section5-one '>
                    <button className='section5-btn mt-5 font-sans fs-22'>   For Employers</button>
                    <p className='fs-56 fw-700 lh-1 font-play sec5-top-head'>Employers, but make it Taghavhi</p>
                    <p className='fs-18 font-mulish sec5-top-content '>At Taghavi, our dedicated team of professionals is committed to simplifying your immigration process. With deep expertise and a personalized approach, we ensure every step is smooth, transparent, and efficient. Trust Taghavi’s Employers to provide the support, knowledge, and care you need to achieve your immigration goals with confidence.</p>
                    <button className='section2-btn2 font-sans'>Schedule A Free Case Evalution</button>
            </div>
            <div className='section5-two mt-5'>
                    <p className='fs-28 mt-2 font-play fw-600 sec5-botton-head' >Taghavi Corporate immigration solutions</p>
                    <div className='d-flex justify-content-between'>
                        <p className='fs-20 fw-600 line-0 font-mulish sec5-botton-content' >All-in-one Platform</p>
                        <p><FaArrowRight /></p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='fs-20 fw-600 line-0 font-mulish sec5-botton-content'>In-House legal Team</p>
                        <p><FaArrowRight /></p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='fs-20 fw-600 line-0 font-mulish sec5-botton-content'>Proactive case Management</p>
                        <p><FaArrowRight /></p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='fs-20 fw-600 line-0 font-mulish sec5-botton-content'>Empowered HRs </p>
                        <p><FaArrowRight /></p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='fs-20 fw-600 line-0 font-mulish sec5-botton-content'>Enhanced Employee Experience</p>
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
        <Row className='mt-5'>
            <Col className='section5-color'>
            <div className="sec5-cart">
                <div className="emp-cart">
                    <div>
                        <img src="../../public/sec5-ic1.png" alt="" />
                    </div>
                    <div>
                        <p className='fs-32 lh-1 font-play'>Reduce Your Workload</p>
                        <p className='lh-1 font-mulish fs-14'> Let Taghavi handle the complexities of immigration, so you can focus on what matters most.</p>
                    </div>
                </div>
                <div className="emp-cart">
                    <div>
                        <img src="../../public/sec5-ic2.png" alt="" />
                    </div>
                    <div>
                        <p className='fs-32 lh-1 font-play'>Reduce Your Workload</p>
                        <p className='lh-1 font-mulish fs-14'> Hiring process with Taghavi’s expertise, ensuring quick, efficient, and compliant workforce solutions.</p>
                    </div>
                </div>
                <div className="emp-cart">
                    <div>
                        <img src="../../public/sec5-ic3.png" alt="" />
                    </div>
                    <div>
                        <p className='fs-32 lh-1 font-play'>Reduce Your Workload</p>
                        <p className='lh-1 font-mulish fs-14'> Taghavi simplifies compliance, guiding you through with ease to ensure smooth, hassle-free processes.    </p>
                    </div>
                </div>
            </div>
            </Col>
        </Row>
   </Container>
  )
}

export default Section5
