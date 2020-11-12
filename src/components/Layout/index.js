import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Main = styled.main`
  height: 100%;
`;

export default ({ children }) => (
  <>
    {/* <Header /> */}
    <Main>{children}</Main>
  </>
);
