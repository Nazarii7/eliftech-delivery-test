import styled from "styled-components";

export const PageLayout = styled.div`
  padding-bottom: 80px;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
`;

export const ContainerItemFirst = styled.div`
  width: calc((100% - 30px) / 2);
  height: 450px;
  background-color: white;
  padding: 20px;
  border-right: 2px solid #ff5722;
  border-radius: 4px;
  overflow-y: auto;
  box-shadow: rgb(239, 74, 22) 7px 0px 9px 1px;
  background-image: linear-gradient(to left, #ff5722 10%, #ffb800);
`;

export const ContainerItemSecond = styled.div`
  width: calc((100% - 30px) / 2);
  height: 450px;
  background-color: white;
  padding: 20px;
  border-left: 2px solid #ff5722;
  border-radius: 4px;
  overflow-y: auto;
  box-shadow: rgb(239, 74, 22) -5px 0px 9px 1px;
  background-image: linear-gradient(to right, #ff5722 10%, #ffb800);
`;

export const Message = styled.p`
  color: white;
  font-size: 24px;
  line-height: 1.36;
`;

export const Text = styled.p`
  color: #ffb800;
  font-size: 24px;
  font-weight: 600;
  position: absolute;
  bottom: 10px;
  left: 65%;
`;
