import styled from "styled-components/macro";

import { Icon as I } from "@mdi/react";

const $Icon = styled(I).attrs((p) => ({
  size: p.size || 1,
}))`
  color: ${(p) =>
    p.$dark ? p.theme.colors.icon.dark : p.theme.colors.icon.light};
`;

export default SIcon;
