import styled from "styled-components";

export default styled.div`
  height: 100%;
  padding: ${({ noVerticalPadding }) => (noVerticalPadding ? 0 : "1rem")} 1rem;
`;
