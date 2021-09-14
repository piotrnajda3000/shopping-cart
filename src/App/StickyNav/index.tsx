import React from "react";

import { TopWrapper } from "../Nav/shared/Nav";

interface StickyNavProps {
  children: JSX.Element | JSX.Element[] | null;
}

export const StickyNav = function ({ children }: StickyNavProps) {
  return (
    <>
      <TopWrapper>{children}</TopWrapper>
    </>
  );
};
