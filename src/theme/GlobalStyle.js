import { createGlobalStyle } from "styled-components";

import { normalize } from "styled-normalize";
import baseCSS from "./baseCSS.js";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  ${baseCSS} 

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow: hidden;
    color: ${(props) => `hsl(0, 0%, ${props.theme.grayscale[2]})`};
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  ul {
    list-style: none;
    margin: 0;  
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  `;
export default GlobalStyle;
