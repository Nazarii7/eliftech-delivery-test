import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 180px;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: rgb(239, 74, 22) 5px 0px 9px 1px;
  background-image: linear-gradient(to right, #ff5722 10%, #ffb800);

  &:hover,
  &:focus {
    background-image: linear-gradient(to right, white 10%, #ffb800);
    color: #ff5722;
  }

  &.disabled {
    background-color: lightgray;
    border-color: lightgray;
    pointer-events: none;
  }
`;
