import { StyledContainer } from "./Container.styled";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <>
      <StyledContainer>{children}</StyledContainer>
    </>
  );
};

export default Container;
