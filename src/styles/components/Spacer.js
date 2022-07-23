import styled from "styled-components/macro";

function getHeight({ axis, size }) {
  return axis === "x" ? 1 : size;
}
function getWidth({ axis, size }) {
  return axis === "y" ? 1 : size;
}

const Spacer = styled.span`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;

export default Spacer;
