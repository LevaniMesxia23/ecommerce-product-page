import React from "react";
import styled from "styled-components";
import Product1 from "../../public/images/image-product-1.jpg";

export default function MainImages() {
  return (
    <>
      <Container>
        <div>
          <img src={Product1} alt="" />

          <svg
            className="left"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="20" fill="white" />
            <path
              d="M22.8572 14.2857L17.1429 20L22.8572 25.7143"
              stroke="#1D2026"
              stroke-width="3"
            />
          </svg>

          <svg
            className="rigth"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="20" fill="white" />
            <path
              d="M17.1428 14.2857L22.8571 20L17.1428 25.7143"
              stroke="#1D2026"
              stroke-width="3"
            />
          </svg>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  div {
    position: relative;

    img {
      width: 100%;
      min-width: 22.4375rem;
      max-width: 23.4375rem;
      height: 18.75rem;
      flex-shrink: 0;
    }
    .rigth {
      position: absolute;
      right: 1rem;
      top: 42%;
    }
    .left {
      position: absolute;
      left: 1rem;
      top: 42%;
    }
  }
`;
