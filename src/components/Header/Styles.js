import styled from "styled-components";

export const Header = styled.header`
  background: white;
  border-bottom: 3px solid;
  height: var(--header-height);
  line-height: var(--header-height);
  position: fixed;
  width: 100%;
  z-index: 1;

  h2 {
    margin: 0;
  }
`;

export const Navigation = styled.ul`
  flex: 1 1 auto;
  padding: 0 3rem;

  li {
    display: inline;

    a {
      border: none;
      color: inherit;
      padding: 0.5rem;
      text-decoration: none;
      transition: all 0.285s var(--cubic-bezier);

      &:hover,
      &.active {
        font-weight: 700;
        background: black;
        color: white;
      }
    }
  }

  li + li {
    margin-left: 1rem;
  }
`;
