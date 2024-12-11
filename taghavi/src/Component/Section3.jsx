import React from "react";

import Container from "react-bootstrap/esm/Container";


const Section3 = () => {
  return (
    <Container className="mt-5">
      <div className="section-3">
        <div className="section3-picture">
          <img src="../../public/Section3Lady.png" />
        </div>
        <div className="section3-content">
          <p className="fs-20 fw-700">Hello! I'm Taghavi</p>
          <p className="fs-14">
            A dedicated member of the American Immigration Lawyers Association
            (AILA)
          </p>
          <p className="fs-56 fw-700 lh-1">I'll Be Your Dedicated Guide</p>
          <p className="fs-14">
            Soulmaz Taghavi is the Founder and Lead Attorney at Taghavi
            Immigration Law, with offices in Richmond, VA, and Washington, DC.
            Her firm specializes in all aspects of immigration law, particularly
            removal defense (asylum) and employment-based cases (NIW).
          </p>
          <p className="fs-14">
            A dedicated member of the American Immigration Lawyers Association
            (AILA), Soulmaz also serves as the Congressional Liaison for
            Congresswoman Spanberger. She has argued before the Fourth Circuit
            Court and has been published in a Legal journal on the right to
            counsel in deportation cases.
          </p>
          <button className="section3-btn">Get To Know About Soulmaz</button>
        </div>
      </div>
    </Container>
  );
};

export default Section3;
