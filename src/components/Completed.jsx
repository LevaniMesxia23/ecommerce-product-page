import React, { createContext, useContext } from "react";
import styled from "styled-components";
import Complete from "../../public/images/complete.png";
import { MyContext } from "../App";
import { useEffect } from "react";

export default function Completed() {
  const {
    changeNum,
    setChangeNum,
    showCheckout,
    setShowCheckout,
    num,
    setNum,
    quantity,
    setQuantity,
    openCompleted,
    setOpenCompleted,
    showCart,
    setShowCart,
  } = useContext(MyContext);


  const handleChange = () => {
    setOpenCompleted(!openCompleted);
    setQuantity(!quantity)
    setShowCheckout(!showCheckout);
    setShowCart(false)
    setNum(0)
  };
  return (
    <Container>
      <img src={Complete} alt="complete" />
      <span>Thank You For Your Purchase!</span>
      <button onClick={handleChange}>Back to home</button>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 20.5rem;
  height: 16rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.5);
  z-index: 10;
  right: 1.5rem;

  padding-top: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to bottom right, #b6a492, #e18e79, #c7872d);

  img {
    width: 50px;
    height: 50px;
    margin-bottom: 2rem;
  }
  span {
    font-size: 20px;
    margin-bottom: 2rem;
    color: white;
  }

  button {
    width: 11rem;
    height: 3rem;
    background-color: #0c8a4d;
    border-radius: 12px;
    border: none;
    color: white;
    cursor: pointer;
  }
  @media (min-width: 1000px) {
    margin-right: 10rem;
  }
  @media (max-width: 1000px) {
    margin-top: -2rem;
  }
`;
