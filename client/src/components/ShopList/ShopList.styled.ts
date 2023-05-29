import styled from "styled-components";

export const Container = styled.div`
  min-height: 400px;
  padding: 20px 15px 60px 15px;
  width: calc((100% - 30px) * 0.15);
  border-right: 2px solid #ff5722;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  box-shadow: rgb(239, 74, 22) 7px 0px 9px 1px;
  background-image: linear-gradient(to left, #ff5722 15%, #ffb800);
`;

export const Heading = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  color: white;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
