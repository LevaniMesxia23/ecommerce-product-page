import React from "react";
import styled from "styled-components";

export default function Purchase() {
  return (
    <>
      <Container>
        <div className="amountBox">
          <div className="amount-left">
            <span className="new-price">$125.00</span>
            <div className="sale">50%</div>
          </div>
          <div className="amount-right">
            <span className="old-price">250%</span>
          </div>
        </div>
        <div></div>
        <div></div>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  padding: 1.5rem;

  .amountBox {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .amount-left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      .new-price {
        color: #1d2026;
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }

      .sale {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.1875rem;
        height: 1.6875rem;
        flex-shrink: 0;
        border-radius: 0.375rem;
        background: #ffeee2;
        color: #ff7e1b;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }

    .amount-right {
      .old-price {
        color: #b6bcc8;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 162.5%;
        text-decoration-line: line-through;
      }
    }
  }
`;
