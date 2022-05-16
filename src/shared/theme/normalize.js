import { normalize } from "styled-normalize";

export default `

  ${normalize}

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    font-family: sans-serif;
  }

  #root {
    height: 100%;
  }
`;
