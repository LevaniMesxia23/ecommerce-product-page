import React from 'react'
import styled from 'styled-components'
import { useContext } from "react";
import { MyContext } from "../App";

export default function Cart() {
  const {changeNum,setChangeNum} = useContext(MyContext);
  return (
    <Container>

    </Container>
  )
}

const Container = styled.div`
  position: absolute;
`