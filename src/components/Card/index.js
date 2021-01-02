import styled from "styled-components";

const Card = styled.div`
  background: white;
  border: 2px solid #aaa;
  transition: all 0.285s var(--cubic-bezier);
  position: relative;

  &.hoverable:hover {
    cursor: pointer;
    border: 2px solid;
    box-shadow: 5px 5px var(--primary-color);
  }
`;

const Thumbnail = styled.div`
  position: relative;
  height: 0;
  padding-top: 56.25%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
`;

const Content = styled.div`
  padding: 0.5rem;
`;

Card.Thumbnail = Thumbnail;
Card.Content = Content;

export default Card;
