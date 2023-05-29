import styled from "styled-components";

export const Label = styled.label`
  color: white;
  display: block;
  font-size: 24px;
  font-weigth: 600;
  margin-bottom: 10px;
`;

export const Error = styled.span`
  display: flex;
  justify-content: center;
  width: 480px;
  font-size: 18px;
  animation-duration: 3000ms;
  color: red;
  background: transparet;
`;

export const Input = styled.input`
  display: block;
  height: 36px;
  width: 480px;
  margin-bottom: 20px;
  font-size: 18px;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  background-image: linear-gradient(to right, #ff5722 10%, #ffb800);
  box-shadow: rgb(239, 74, 22) -10px 0px 9px 1px;
  outline: none;

  &:hover,
  &:focus {
    background-image: linear-gradient(to left, #ff5722 1%, #ffb800);
    color: #ff5722;
    box-shadow: rgb(280, 184, 0) -20px 0px 9px 1px;
  }
`;

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
