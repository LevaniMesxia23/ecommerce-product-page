import React from "react";
import styled from "styled-components";
import Product1 from "../../public/images/image-product-1.jpg";
import Product2 from "../../public/images/image-product-2.jpg";
import Product3 from "../../public/images/image-product-3.jpg";
import Product4 from "../../public/images/image-product-4.jpg";

export default function SmallImages() {
  return (
    <Container>
      <img src={Product1} alt="" />
      <img src={Product2} alt="" />
      <img src={Product3} alt="" />
      <img src={Product4} alt="" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;

  img {
    width: 5.5rem;
    height: 5.5rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
  }
  img:hover {
    border-radius: 0.625rem;
    border: 2px solid #ff7e1b;
    background: white;
    opacity: 0.3;
    cursor: pointer;
  }
`;
