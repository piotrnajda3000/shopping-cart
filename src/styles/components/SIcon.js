import styled from "styled-components/macro";

import { Icon as I } from "@mdi/react";

const SIcon = styled(I).attrs((p) => ({
  size: p.size || 1,
  spin: p.spin || false,
}))`
  color: ${(p) =>
    p.$dark ? p.theme.colors.icon.dark : p.theme.colors.icon.light};

    ${(p) =>
      p.spin &&
      `
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear
    `};
  
  }
   
    @keyframes spin {
      from {
          transform:rotate(0deg);
      }
      to {
          transform:rotate(360deg);
      }
  }
`;

export default SIcon;
