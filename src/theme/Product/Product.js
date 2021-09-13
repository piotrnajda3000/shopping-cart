import styled from "styled-components";

const Title = styled.p`
  font-size: 18px;
`;

const ProductBox = styled.div`
  width: 300px;
  height: 450px;
  background-color: hsl(0, 0%, ${(props) => props.theme.grayscale[7]});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & img {
    width: 236px;
    height: 236px;
    object-fit: cover;
    border-radius: 7px;
  }

  & p {
    margin: 0;
  }

  &:hover p:first-of-type {
    color: hsl(260, 90%, 85%);
  }

  &:hover {
    cursor: pointer;
  }
`;

const Control = `
  outline: none;
  border-radius: 7px;
  background: inherit;
  border: 1px solid white;
  color: white;
  padding: 7px;
  cursor: pointer;
`;

const QuantityInput = styled.input`
  ${Control}
  width: calc(185px + 1rem);
`;

const ControlButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const ControlButton = styled.button`
  ${Control}
`;

const Cancel = styled.button`
  ${Control}
`;

export {
  ProductBox,
  Title,
  QuantityInput,
  ControlButtons,
  ControlButton,
  Cancel,
};
