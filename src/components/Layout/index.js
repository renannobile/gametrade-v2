import React from "react";
import styled from "styled-components";
import Header from "components/Header";

const Main = styled.main`
  height: 100%;
  padding-top: var(--header-height);
`;

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);

export default Layout;
