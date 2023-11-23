import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Raleway', sans-serif;
  max-width: 100vw;
  scale: 1;
  background-color: ${theme.colors.antiFlashWhite};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
  }

`;

export default GlobalStyles;
