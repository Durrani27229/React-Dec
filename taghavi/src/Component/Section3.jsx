import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";


const Section3 = () => {
  return (
    <Container fluid className="mt-5">
      {/* <div className="section-3">
        <div className="section3-picture">
          <img src="../../public/Section3Lady.png" />
        </div>
        <div className="section3-content">
          <p className="fs-22 fw-700 font-play">Hello! I'm Taghavi</p>
          <p className="fs-18 font-mulish">
            A dedicated member of the American Immigration Lawyers Association
            (AILA)
          </p>
          <p className="fs-56 fw-700 lh-1 font-play">I'll Be Your Dedicated Guide</p>
          <p className="fs-18 font-mulish">
            Soulmaz Taghavi is the Founder and Lead Attorney at Taghavi
            Immigration Law, with offices in Richmond, VA, and Washington, DC.
            Her firm specializes in all aspects of immigration law, particularly
            removal defense (asylum) and employment-based cases (NIW).
          </p>
          <p className="fs-18 font-mulish">
            A dedicated member of the American Immigration Lawyers Association
            (AILA), Soulmaz also serves as the Congressional Liaison for
            Congresswoman Spanberger. She has argued before the Fourth Circuit
            Court and has been published in a Legal journal on the right to
            counsel in deportation cases.
          </p>
          <button className="section3-btn font-sans">Get To Know About Soulmaz</button>
        </div>
      </div> */}
      <Row className="sec3-col">
        <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
        <div className="section3-picture">
          <img src="../../public/Section3Lady.png" />
        </div>
        </Col>
        
        <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
        <div className="section3-content mt-5">
          <p className="fs-22 fw-700 font-play">Hello! I'm Taghavi</p>
          <p className="fs-18 font-mulish sec3-content">
            A dedicated member of the American Immigration Lawyers Association
            (AILA)
          </p>
          <p className="fs-56 fw-700 lh-1 font-play sec3-head">I'll Be Your <br /> Dedicated Guide</p>
          <p className="fs-18 font-mulish sec3-content">
            Soulmaz Taghavi is the Founder and Lead Attorney at Taghavi
            Immigration Law, with offices in Richmond, VA, and Washington, DC.
            Her firm specializes in all aspects of immigration law, particularly
            removal defense (asylum) and employment-based cases (NIW).
          </p>
          <p className="fs-18 font-mulish sec3-content">
            A dedicated member of the American Immigration Lawyers Association
            (AILA), Soulmaz also serves as the Congressional Liaison for
            Congresswoman Spanberger. She has argued before the Fourth Circuit
            Court and has been published in a Legal journal on the right to
            counsel in deportation cases.
          </p>
          <button className="section3-btn font-sans">Get To Know About Soulmaz</button>
        </div>
        </Col>
      </Row>



    </Container>
  );
};

export default Section3;
