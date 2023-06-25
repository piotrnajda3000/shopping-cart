import { createGlobalStyle } from "styled-components/macro";

import base from "./_base";

const GlobalStyle = createGlobalStyle`
  ${base} 

  * {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  body {
    background: hsla(0, 0%, 97%, 1);
    margin: auto;
  }

  button[disabled] {
    cursor: auto;
  }


`;

export default GlobalStyle;
