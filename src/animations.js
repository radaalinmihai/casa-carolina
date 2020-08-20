import { keyframes } from "styled-components";

export const slideLeft = keyframes`
  0% {
    left: 0;
    transform: translate(0, -50%);
  }
  100% {
    left: -100vw;
    transform: translate(-100vw, -50%);
  }
`;
