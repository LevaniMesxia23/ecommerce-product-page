import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { MyContext } from "../App";

export default function Cart() {
  const { changeNum, setChangeNum } = useContext(MyContext);
  return (
    <Container>
      <div className="cart-div">Cart</div>
      <div className="line"></div>
      <div className="empty-div">
        <div className="empty">Your cart is empty.</div>
      </div>
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
  margin-top: 0.5rem;

  .cart-div {
    padding: 1.5rem;
    color: #1d2026;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .line {
    width: 100%;
    height: 0.0625rem;
    flex-shrink: 0;
    background: #e4e9f2;
  }
  .empty-div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 4.81rem;

    color: #69707d;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 162.5%;
  }
`;
