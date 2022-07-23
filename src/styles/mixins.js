import { css } from "styled-components/macro";

export const horizontalItem = (gap = 2) => css`
  display: flex;
  gap: ${(p) => p.theme.space[gap]};
  align-items: center;
`;

export const verticalItem = (gap = 2) => css`
  display: flex;
  gap: ${(p) => p.theme.space[gap]};
  flex-direction: column;
`;

export const elevation = (strength = "ultra-light") => {
  switch (strength) {
    case "ultra-light":
      return css`
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05),
          0px 12px 8px rgba(0, 0, 0, 0.02);
      `;
    case "light":
      return css`
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1),
          0px 12px 32px rgba(0, 0, 0, 0.05);
      `;
    case "medium":
      return css`
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1),
          0px 24px 60px rgba(6, 47, 125, 0.05),
          0px 12px 24px rgba(27, 59, 119, 0.05);
      `;
  }
};
