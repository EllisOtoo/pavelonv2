import styled from "styled-components";

export const StyledNav = styled.div`
  height: 4vh;
  animation-name: heightExpand;
  animation-duration: 2s @keyframes heightExpand {
    from {
      height: 4vh;
    }
    to {
      height: 20vh;
    }
  }
`;

export const Ul = styled.ul``;
export const GradientDiv = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  background-size: 300% 300%;
  clip-path: polygon(0 0, 100% 0, 100% 36%, 0 66%);

  background-image: linear-gradient(
    -45deg,
    rgba(59, 173, 227, 1) 0%,
    rgba(87, 111, 230, 1) 25%,
    rgba(152, 68, 183, 1) 51%,
    rgba(255, 53, 127, 1) 100%
  );
  animation: AnimateBG 20s ease infinite;

  @keyframes AnimateBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
