import { ThemeProvider } from "styled-components/macro";

import React from "react";

import GlobalStyle from "../styles/GlobalStyle/GlobalStyle";
import theme from "../styles/theme";

const withTheme = (Component) => () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Component />
      </>
    </ThemeProvider>
  );
};

export default withTheme;
