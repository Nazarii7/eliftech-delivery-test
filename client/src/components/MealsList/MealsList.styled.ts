import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 40px 60px 40px;
  width: calc((100% - 30px) * 0.85);
  border-left: 2px solid #ff5722;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  box-shadow: rgb(239, 74, 22) -5px 0px 9px 1px;
  background-image: linear-gradient(to right, #ff5722 -5%, #ffb800);
`;
