import styled from "styled-components";

export default styled.div`
  border: 2px solid #aaa;
  transition: all 0.285s var(--cubic-bezier);

  &:hover {
    border: 2px solid;
    box-shadow: 5px 5px var(--primary-color);
  }
`;
