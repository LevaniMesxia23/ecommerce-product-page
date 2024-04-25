import React from "react";
import styled from "styled-components";

export default function Information() {
  return (
    <Cotainer>
      <span className="sneaker-company">Sneaker Company</span>
      <h1>Fall Limited Edition Sneakers</h1>
      <span className="info">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </span>
    </Cotainer>
  );
}

const Cotainer = styled.div`
  padding: 1.5rem;

  .sneaker-company {
    color: #ff7e1b;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.11538rem;
    text-transform: uppercase;
  }
  h1 {
    margin-top: 1.19rem;
    margin-bottom: 0.94rem;
  }
  .info {
    color: #69707d;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 166.667%;
  }
`;
