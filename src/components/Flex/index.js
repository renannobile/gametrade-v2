import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "auto"};
  align-items: ${({ alignItems }) => alignItems || "auto"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "auto"};
  flex-direction: ${({ flexDirection }) => flexDirection || "auto"};
  height: ${({ fullHeight }) => (fullHeight ? "100%" : "auto")};
`;
