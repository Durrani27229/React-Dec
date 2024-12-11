import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { FaArrowRight } from "react-icons/fa";

const Section8 = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          <div className='section8'>
              <div className='section8-start'>
                <p className='fs-32 fw-700' >Blogs</p>
                <button className='sec6-btn1'>Let's Talk</button>
              </div>
              <div className='sec8-cart'>
                  <div className="blog-cart">
                    <div>
                      <img src="../../public/blog1.png" alt="" />
                    </div>
                    <div className='blog-content'>
                      <p className='fs-20 fw-700'>Navigating Immigration <br /> Laws: A Guide for Employers</p>
                      <div className='sec8-link'>
                      <p> Learn More   </p>
                      <p><FaArrowRight className='fs-12' /></p>
                      </div>
                    </div>
                  </div>
                  <div className="blog-cart">
                    <div>
                      <img src="../../public/blog2.png" alt="" />
                    </div>
                    <div className='blog-content'>
                      <p className='fs-20 fw-700'>Top Benefits of Outsourcing <br />Immigration Processes</p>
                      <div className='sec8-link'>
                      <p> Learn More   </p>
                      <p><FaArrowRight className='fs-12' /></p>
                      </div>
                    </div>
                  </div>
                  <div className="blog-cart">
                    <div>
                      <img src="../../public/blog3.png" alt="" />
                    </div>
                    <div className='blog-content'>
                      <p className='fs-20 fw-700'>Simplifying Global Recruitment with Immigration </p>
                      <div className='sec8-link'>
                      <p> Learn More   </p>
                      <p><FaArrowRight className='fs-12' /></p>
                      </div>
                    </div>
                  </div>
                  <div className="blog-cart">
                    <div>
                      <img src="../../public/blog4.png" alt="" />
                    </div>
                    <div className='blog-content'>
                      <p className='fs-20 fw-700'>The Importance of Compliance <br /> in Hiring</p>
                      <div className='sec8-link'>
                      <p> Learn More   </p>
                      <p><FaArrowRight className='fs-12' /></p>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Section8
