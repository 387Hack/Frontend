import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  
  *,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }


  body {
    box-sizing: border-box;
    font-size : 1.2rem;
  }
`;

export default GlobalStyles;
