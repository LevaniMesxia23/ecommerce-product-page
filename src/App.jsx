import Navigation from "../src/components/Navigation";
import GlobalStyles from "./styles/GlobalStyles";
import MainImages from "./components/MainImages";
import Information from "./components/Information";
import Purchase from "./components/Purchase";
import AddToCart from "./components/AddToCart";
import Cart from "./components/Cart";
import styled from "styled-components";
import { useState } from "react";
import React, { createContext } from "react";

export const MyContext = React.createContext(null);

function App() {
  const [changeNum, setChangeNum] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [quantity, setQuantity] = useState(false);

  return (
    <>
      <MyContext.Provider
        value={{
          changeNum,
          setChangeNum,
          quantity,
          setQuantity,
          showCart,
          setShowCart,
        }}
      >
        <Container>
          <GlobalStyles />
          <Navigation />
          <div className="cart-box">{showCart ? <Cart /> : null}</div>
          <MainImages />
          <Information />
          <Purchase />
          <AddToCart />
        </Container>
      </MyContext.Provider>
    </>
  );
}

export default App;

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  .cart-box {
    display: flex;
    justify-content: center;
    padding-top: 0.5rem;
  }
`;
