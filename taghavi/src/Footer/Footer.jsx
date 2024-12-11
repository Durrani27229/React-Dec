import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Container fluid className='footer-color mt-5'>
        <Container className='mt-5'>
        <Row>
            <Col>
                <div className="footer mt-5">
                    <div className="footer-description">
                        <div className="footer-logo">
                            <img src="../../public/foot-logo.png" alt="" />
                        </div>
                        <div className="footer-desc">
                            <p className='fs-18'>At Taghavi Immigration Law, our team comes from unique and diverse cultural backgrounds, <br /> which underscores our extensive knowledge of the United States immigration system.</p>
                        </div>
                        <div className="footer-icons">
                        <p><FaFacebookSquare className='fs-28' /></p>
                        <p><FaInstagram className='fs-28' /></p>
                        <p> <FaYoutube className='fs-28' /></p>
                        </div>
                    </div>
                    <div className="footer-links mt-5">
                        <div>
                            <p className='fs-28 lh-lg'>QUICK LINKS</p>
                            <p className='fs-14'>Practise Area</p>
                            <p className='fs-14'>About Us</p>
                            <p className='fs-14'>COntact Us</p>
                            <p className='fs-14'>Resources</p>
                            <p className='fs-14'>Blogs</p>
                            <p className='fs-14'>FAQ</p>
                        </div>
                        <div>
                            <p className='fs-28 lh-lg'>CONTACT US</p>
                            <div className='d-flex gap-2 lh-lg '>
                            <img src="../../public/phone.png"  alt="" />
                            <p className='fs-14'> 804-408-3522</p>
                            </div>
                            <div className='d-flex gap-2 lh-lg '>
                            <img src="../../public/msg.png"  alt="" />
                            <p className='fs-14'> info@tilimigration.com</p>
                            
                            </div>
                            <div className='d-flex gap-2 lh-lg '>
                            <img src="../../public/location.png"  alt="" />
                            <p className='fs-14'>1500 Forest Ave, Suite 124 Richmond, VA 23229</p>
                            </div>
                            <div className='d-flex gap-2 lh-lg '>
                            <img src="../../public/location.png"  alt="" />
                            <p className='fs-14'>601 13th street NW 12th FL Washington DC 20005</p>
                            </div>
                        </div>
                        <div className='d-flex flex-column justify-content-center'>
                            <p className='fs-56'>Have a Question?</p>
                            <button className='footer-btn'>Contact Us</button>
                        </div>
                    </div>
                    <div className="footer-end text-end">
                        <p>Terms and Conditions | Privacy Policy</p>
                    </div>
                </div>
            </Col>
        </Row>
        </Container>
    </Container>
  )
}

export default Footer
