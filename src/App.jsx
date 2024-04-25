import Navigation from "../src/components/Navigation";
import GlobalStyles from "./styles/GlobalStyles";
import MainImages from "./components/MainImages";
import Information from "./components/Information";
import Purchase from "./components/Purchase";
import AddToCart from "./components/AddToCart";
import styled from "styled-components";

function App() {
  return (
    <>
      <Container>
        <GlobalStyles />
        <Navigation />
        <MainImages />
        <Information />
        <Purchase />
        <AddToCart />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
