import Navigation from "../src/components/Navigation"
import GlobalStyles from "./styles/GlobalStyles"
import MainImages from "./components/MainImages"
import Information from "./components/Information"
import styled from "styled-components"

function App() {

  return (
    <>
      <GlobalStyles />
      <Navigation />
      <MainImages />
      <Information />
    </>
  )
}

export default App

