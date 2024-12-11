import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { FaArrowRight } from "react-icons/fa";

const Section2 = () => {
  return (
    <Container className='mt-5 section2-color'>
        <Row>
            <Col className='section2-left' md={6}>
                <div className='sec2-img'>
                    <img src="../../public/MaskGroup.png"  alt="" />
                </div>
            </Col>
            <Col className='section2-right' md={6}>
                <div className='section2-one mt-4'>
                    <button className='section2-btn mt-2'>   For Individuals</button>
                    <p className='fs-56 fw-700 lh-1 padding-lr'>Taghavi immigration easier, step by step</p>
                    <p className='padding-lr fs-18  '>At Taghavi, we simplify the immigration process with a step-by-step approach tailored to your unique needs. Our dedicated team provides expert guidance, ensuring clarity and confidence every step of the way. Whether you're pursuing residency, work permits, or citizenship, we’re here to make your immigration journey smoother and stress-free.</p>
                    <button className='section2-btn2 ms-3'>Schedule A Free Case Evalution</button>
                </div>
                <div className='section2-two mt-4'>
                    <p className='fs-28'>Taghavi Help for individuals</p>
                    <div className='d-flex justify-content-between'>
                        <p className='fs-20 lh-2'>Understanding the expansion of Parole in Place (PIP)</p>
                        <p><FaArrowRight /></p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='fs-20 line-h0'>Marriage Green Card via Adjustment of Status</p>
                        <p><FaArrowRight /></p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='fs-20 line-h0'>Marriage Green Card via Consular Processing</p>
                        <p><FaArrowRight /></p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='fs-20 line-h0'>K-1 Fiancé Visa </p>
                        <p><FaArrowRight /></p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='fs-20 line-h0'>See all immigrant and nonimmigrant visa services</p>
                        <p><FaArrowRight /></p>
                    </div>
            
                </div>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col>
                <div className='sec2-cart'>
                    <div className="visa-cart">
                        <div >
                            <img src="../../public/Visa.png" className='cart-image' alt="" />
                        </div>
                        <div>
                            <p className='fs-30 lh-1'>Complete Visa Application</p>
                        </div>
                    </div>
                    <div className="visa-cart">
                        <div >
                            <img src="../../public/Support.png" className='cart-image' alt="" />
                        </div>
                        <div>
                            <p className='fs-30 lh-1'>Live Support, Every Day</p>
                        </div>
                    </div>
                    <div className="visa-cart">
                        <div >
                            <img src="../../public/Lawyer.png" className='cart-image' alt="" />
                        </div>
                        <div>
                            <p className='fs-30 lh-1'>Lawyer Support for One Flat Fee</p>
                        </div>
                    </div>
                    <div className="visa-cart">
                    <div >
                            <img src="../../public/MoneyBack.png" className='cart-image' alt="" />
                        </div>
                        <div>
                            <p className='fs-30 lh-1'>Money Back Guarantee</p>
                        </div>
                    </div>
        
                </div>
            </Col>
        </Row>
        
    </Container>
  )
}

export default Section2
