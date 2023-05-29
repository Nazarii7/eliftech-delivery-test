import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import { Suspense } from "react";

const Layout = (): JSX.Element => {
  return (
    <>
      <Container>
        <Header />
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
