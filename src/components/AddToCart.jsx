import React, { useState } from "react";
import styled from "styled-components";
import plus from "../../public/images/icon-plus.svg";
import minus from "../../public/images/icon-minus.svg";
import { useContext } from "react";
import { MyContext } from "../App";

export default function AddToCart() {
  const { changeNum, setChangeNum } = useContext(MyContext);
  const { quantity, setQuantity } = useContext(MyContext);
  const { num, setNum } = useContext(MyContext);
  console.log(num);

  const handlePlus = () => {
    setChangeNum((changeNum) => changeNum + 1);
  };

  const handleMinus = () => {
    if (changeNum > 0) setChangeNum((changeNum) => changeNum - 1);
  };

  const quantityChange = () => {
    setQuantity(true);
    setNum(changeNum);
  };
  return (
    <>
      <Container>
        <div className="plus-minus-position">
          <div className="quantity">{changeNum}</div>
          <img className="plus" src={plus} alt="" onClick={handlePlus} />
          <img className="minus" src={minus} alt="" onClick={handleMinus} />
        </div>

        <div className="add" onClick={quantityChange}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.0905 2.91311H16.7397C17.2062 2.91311 17.5482 3.35211 17.4353 3.80391L15.9785 9.63048C15.9025 9.93446 15.6378 10.1539 15.3251 10.1723L3.86762 10.8456C4.07245 11.3243 4.54702 11.6529 5.09162 11.6529H13.0982C14.2967 11.6529 15.2717 12.628 15.2717 13.8264C15.2717 15.0249 14.2967 16 13.0982 16C11.5964 16 10.5406 14.502 11.0544 13.0868H7.13056C7.645 14.5038 6.58692 16 5.08677 16C3.27933 16 2.26409 13.9081 3.37522 12.4891C2.75894 12.0009 2.40119 11.2825 2.34268 10.6204C1.43419 0.498541 1.47444 0.946953 1.55953 1.89506L1.56008 1.9012C1.61714 2.53699 1.6934 3.38676 1.51811 1.43385H0.716927C0.320978 1.43385 0 1.11288 0 0.716927C0 0.320978 0.320978 0 0.716927 0H2.17355C2.54465 0 2.85443 0.28322 2.88761 0.652847L3.0905 2.91311ZM4.3471 13.8264C4.3471 14.2343 4.67894 14.5661 5.08677 14.5661C5.49463 14.5661 5.82647 14.2343 5.82647 13.8264C5.82647 13.4186 5.49463 13.0868 5.08677 13.0868C4.67894 13.0868 4.3471 13.4186 4.3471 13.8264ZM13.0982 14.5661C12.6903 14.5661 12.3585 14.2343 12.3585 13.8264C12.3585 13.4186 12.6903 13.0868 13.0982 13.0868C13.506 13.0868 13.8379 13.4186 13.8379 13.8264C13.8379 14.2343 13.506 14.5661 13.0982 14.5661ZM3.67463 9.42062L14.7152 8.77181L15.8215 4.34693H3.21921L3.67463 9.42062Z"
              fill="white"
            />
          </svg>
          <span className="add-to-cart">Add to cart</span>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 1.5rem;

  .plus-minus-position {
    position: relative;

    .quantity {
      width: 100%;
      height: 3.5rem;
      flex-shrink: 0;
      border-radius: 0.625rem;
      background: #f6f8fd;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .plus {
      position: absolute;
      right: 1.5rem;
      top: 1.38rem;
      cursor: pointer;
    }
    .minus {
      position: absolute;
      left: 1.5rem;
      top: 1.65rem;
      cursor: pointer;
    }
  }

  .add {
    min-width: 50%;
    max-width: 100%;
    height: 3.5rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    background: #ff7e1b;
    box-shadow: 0px 20px 50px -20px #ff7e1b;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    gap: 0.97rem;
    cursor: pointer;

    .add-to-cart {
      color: #fff;
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      
    }
  }
  .add:hover {
      border-radius: 0.625rem;
      background: #ffab6a;
      box-shadow: 0px 20px 50px -20px #ff7e1b;
    }

  @media (min-width: 520px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .quantity {
      min-width: 9.8125rem;
    }
    .add {
      max-width: 17rem;
      margin-top: 0;
    }
  }
`;
