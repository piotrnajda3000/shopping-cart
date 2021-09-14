import styled from "styled-components";

export const OverflowWrapper = styled.div`
  display: flex;
  ${({ overflowY }) => overflowY && `overflow-y: ${overflowY};`}
`;
