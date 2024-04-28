import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { MyContext } from "../App";
import Product from "../../public/images/image-product-1.jpg";
import Delete from "../../public/images/icon-delete.svg";

export default function Cart() {
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
  } = useContext(MyContext);

  const [loading, setLoading] = useState(false);

  const handleCheckout = () => {
    setLoading(!loading);
    setTimeout(() => {
      setLoading(false);
      setOpenCompleted(!openCompleted);
    }, 2000);
  };

  useEffect(() => {
    if (num > 0) {
      setShowCheckout(false);
    }
  }, [num]);

  console.log(num);
  const handleDelete = () => {
    setShowCheckout(true);
    setQuantity(false);
    setNum(0);
  };
  return (
    <Container>
      <div className="cart-div">Cart</div>
      <div className="line"></div>
      <div className="empty-div">
        {showCheckout ? (
          <div className="empty">Your cart is empty.</div>
        ) : (
          <div className="addedToCart">
            <div className="added-Top">
              <img src={Product} alt="" className="product1" />
              <div className="product-center">
                <span className="product-name">
                  Fall Limited Edition Sneakers
                </span>
                <span className="product-quantity">
                  $125.00 x {num} <span>`${num * 125}`</span>
                </span>
              </div>
              <img
                src={Delete}
                alt=""
                onClick={handleDelete}
                className="delete-button"
              />
            </div>
            <div className="checkout" onClick={handleCheckout}>
              {loading ? "Processing..." : "Checkout"}
            </div>
          </div>
        )}
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
  right: 1.5rem;

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

    color: #69707d;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    line-height: 162.5%;

    .empty {
      margin-top: 4.31rem;
    }
  }

  .addedToCart {
    padding: 1.5rem 1.5rem 2rem;

    .added-Top {
      display: flex;
      justify-content: center;
      align-items: end;
      padding-bottom: 1.63rem;

      .product1 {
        width: 3.125rem;
        height: 3.125rem;
        flex-shrink: 0;
        border-radius: 0.25rem;
        background: url(<path-to-image>) lightgray 50% / cover no-repeat;
        margin-right: 0.55rem;
      }

      .product-center {
        display: flex;
        flex-direction: column;
        align-items: start;

        .product-name,
        .product-quantity {
          color: #69707d;
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: 162.5%;
          text-align: start;

          span {
            color: #1d2026;
            font-size: 1rem;
            font-style: normal;
            font-weight: 700;
            line-height: 162.5%;
          }
        }
      }
      .delete-button {
        cursor: pointer;
      }
    }

    .checkout {
      border-radius: 0.625rem;
      background: #ff7e1b;
      width: 100%;
      height: 3.5rem;
      color: #fff;
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }

  @media (min-width: 1000px) {
    margin-right: 10rem;
  }
  @media (max-width: 1000px) {
    margin-top: -2rem;
  }
`;
