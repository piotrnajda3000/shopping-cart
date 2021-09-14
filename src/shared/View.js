import styled, { css } from "styled-components";

export const View = styled.div`
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 2rem;
  flex: 1;
  min-height: calc(100vh - 108px);
  height: fit-content;
  padding: 2rem;
  display: grid;
  justify-content: center;
  background-color: hsl(0, 0%, ${(props) => props.theme.grayscale[8]});

  ${({ mobile }) =>
    mobile &&
    css`
      padding: 1rem;
    `}
`;
