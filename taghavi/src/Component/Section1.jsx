import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";

const Section1 = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <div className="section1-left">
            <div className="sec1-one">
              <p className="fs-80 fw-500 line-h1 ps-5">Your <br /> Immigration <br /> Experience, <br /> Redefined</p>
              <button className="sec1-btn">
                Let's Talk
              </button>
            </div>
            <div className="sec1-two">
              <p className="fs-26 ps-5 pe-5">
                At Taghavi’s, we navigate the complexities of immigration with
                ease, bring individuals and supporting employess in a global
                workforce.
              </p>
            </div>
          </div>
        </Col>
        <Col md={4} >
          <div className="section1-right">
            <img src="../../public/Section1Lady.png"  alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section1;
