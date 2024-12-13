import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";

const Section1 = () => {
  return (
    <Container fluid className="mt-5">
      <Row>
        

          <Col lg={8} md={8} sm={12} className="section1">
            <div className="sec1-top">
            <p className="fs-80 fw-500 line-h1 ps-5 font-play sec1-head">Your <br /> Immigration <br /> Experience, <br /> Redefined</p>
              <button className="sec1-btn font-sans">
                Let's Talk
              </button>
            </div>
            <div className="sec1-bottom">
            <p className="fs-24 sec1-content font-mulish">
                At Taghavi’s, we navigate the complexities of immigration with
                ease, bring individuals and supporting employess in a global
                workforce.
              </p>
            </div>
          
          
          </Col>
          <Col lg={4} md={4} sm={12} className="sec1-col2">
          
          
          
          </Col>


      </Row>
    </Container>
  );
};

export default Section1;
