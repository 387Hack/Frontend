import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100&display=swap');
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }


  body {
    box-sizing: border-box;
    font-family: 'Barlow', sans-serif;
    font-size : 1.2rem;
  }
`;

export default GlobalStyles;
