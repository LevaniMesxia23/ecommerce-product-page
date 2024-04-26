import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { MyContext } from "../App";

export default function Cart() {
  const { changeNum, setChangeNum } = useContext(MyContext);
  return (
    <Container>
      <div className="cart-div">Cart</div>
      <div className="empty">Your cart is empty.</div>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 22.5rem;
  height: 16rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.5);
  
  .cart-div{
    
  }
`;
