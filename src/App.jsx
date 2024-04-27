import Navigation from "../src/components/Navigation";
import GlobalStyles from "./styles/GlobalStyles";
import MainImages from "./components/MainImages";
import SmallImages from "./components/SmallImages";
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
  const [showCheckout, setShowCheckout] = useState(true);
  const [num, setNum] = useState(0);

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
          showCheckout,
          setShowCheckout,
          num,
          setNum,
        }}
      >
        <Container>
          <GlobalStyles />
          <Navigation />
          <div className="cart-box">{showCart ? <Cart /> : null}</div>

          <div className="box">
            <div className="left-box">
              <MainImages />
              <SmallImages />
            </div>
            <div className="right-box">
              <Information />
              <Purchase />
              <AddToCart />
            </div>
          </div>
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

  .right-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 520px;
  }

  @media (min-width: 520px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 1000px) {
    /* padding: 1.75rem 10.31rem 8.25rem; */
    .box {
      display: flex;
      gap: 10%;
      margin-top: 5.93rem;

      .left-box {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
    }
  }
`;
