import React from "react";

import { TopWrapper } from "./Nav.styled";

export const StickyNav = function ({ children }) {
  return (
    <>
      <TopWrapper>{children}</TopWrapper>
    </>
  );
};
