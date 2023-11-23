import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyle";
import styled from "styled-components";
import Home from "./pages/home/Home";

const AppWrapper = styled.div``;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AppWrapper>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </AppWrapper>
    </Router>
  );
}

export default App;
