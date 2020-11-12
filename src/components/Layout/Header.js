import React from "react";
import styled from "styled-components";

const Header = styled.header`
  background: var(--primary-color);
  border-bottom: 3px solid;
  height: var(--header-height);
  line-height: var(--header-height);
  padding: 0 3rem;
`;

const Logo = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
`;

export default () => <Header></Header>;
