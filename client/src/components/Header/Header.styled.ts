import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyleHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition-duration: 600ms;
  &.active {
    border-right: 1px solid #ef4a16;
    color: white;
    background-image: linear-gradient(
      to left,
      rgb(255, 87, 34) 15%,
      rgb(255, 184, 0)
    );
    box-shadow: 0px 8px 11px #ef4a16;
  }
`;
