/* eslint-disable */
import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import pink from "./pink.png";

const Global = createGlobalStyle`
  :root {
    --pink: #e6007e;
    --black: black;
    overflow: hidden;
  }

  body {
    padding: 0;
    margin: 0;
    position: relative;
    height: 100vh;
    ${({ pink }) =>
      pink
        ? css`
            background: var(--pink);
            color: var(--black);
          `
        : css`
            color: var(--pink);
            background: var(--black);
          `}
    overflow: hidden;
  }
  body::before {
    content: "";
    width: 400vh;
    height: 400vh;
    background: url(${pink});
    background-repeat: repeat;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center;
    animation: bgmove 5s infinite;
    animation-timing-function: cubic-bezier(0.33, -0.29, 0.79, 1.46);
  }

  @keyframes bgmove {
    0% {
      transform: translate(-50%, -50%) rotate(45deg) scale(1);
    }
    50% {
      transform: translate(calc(-50% + 200px), calc(-50% + 100px)) rotate(45deg) scale(1);
    }
    100% {
      transform: translate(-50%, -50%) rotate(45deg) scale(1);
    }
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Text = styled.span`
  font-size: 128px;
  font-weight: bold;
  font-family: sans-serif;

  animation: glitch1 2.5s infinite;

  &:nth-child(2) {
    top: 0;
    left: 0;
    position: absolute;
    color: #67f3da;
    animation: glitch2 2.5s infinite;
  }

  &:nth-child(3) {
    top: 0;
    left: 0;
    position: absolute;
    color: #f16f6f;
    animation: glitch3 2.5s infinite;
  }

  @keyframes glitch1 {
    0% {
      transform: none;
      opacity: 1;
    }
    7% {
      transform: skew(-0.5deg, -0.9deg);
      opacity: 0.75;
    }
    10% {
      transform: none;
      opacity: 1;
    }
    27% {
      transform: none;
      opacity: 1;
    }
    30% {
      transform: skew(0.8deg, -0.1deg);
      opacity: 0.75;
    }
    35% {
      transform: none;
      opacity: 1;
    }
    52% {
      transform: none;
      opacity: 1;
    }
    55% {
      transform: skew(-1deg, 0.2deg);
      opacity: 0.75;
    }
    50% {
      transform: none;
      opacity: 1;
    }
    72% {
      transform: none;
      opacity: 1;
    }
    75% {
      transform: skew(0.4deg, 1deg);
      opacity: 0.75;
    }
    80% {
      transform: none;
      opacity: 1;
    }
    100% {
      transform: none;
      opacity: 1;
    }
  }

  @keyframes glitch2 {
    0% {
      transform: none;
      opacity: 0.25;
    }
    7% {
      transform: translate(-2px, -3px);
      opacity: 0.5;
    }
    10% {
      transform: none;
      opacity: 0.25;
    }
    27% {
      transform: none;
      opacity: 0.25;
    }
    30% {
      transform: translate(-5px, -2px);
      opacity: 0.5;
    }
    35% {
      transform: none;
      opacity: 0.25;
    }
    52% {
      transform: none;
      opacity: 0.25;
    }
    55% {
      transform: translate(-5px, -1px);
      opacity: 0.5;
    }
    50% {
      transform: none;
      opacity: 0.25;
    }
    72% {
      transform: none;
      opacity: 0.25;
    }
    75% {
      transform: translate(-2px, -6px);
      opacity: 0.5;
    }
    80% {
      transform: none;
      opacity: 0.25;
    }
    100% {
      transform: none;
      opacity: 0.25;
    }
  }

  @keyframes glitch3 {
    0% {
      transform: none;
      opacity: 0.25;
    }
    7% {
      transform: translate(2px, 3px);
      opacity: 0.5;
    }
    10% {
      transform: none;
      opacity: 0.25;
    }
    27% {
      transform: none;
      opacity: 0.25;
    }
    30% {
      transform: translate(5px, 2px);
      opacity: 0.5;
    }
    35% {
      transform: none;
      opacity: 0.25;
    }
    52% {
      transform: none;
      opacity: 0.25;
    }
    55% {
      transform: translate(5px, 1px);
      opacity: 0.5;
    }
    50% {
      transform: none;
      opacity: 0.25;
    }
    72% {
      transform: none;
      opacity: 0.25;
    }
    75% {
      transform: translate(2px, 6px);
      opacity: 0.5;
    }
    80% {
      transform: none;
      opacity: 0.25;
    }
    100% {
      transform: none;
      opacity: 0.25;
    }
  }
`;

function App() {
  const pink = new Date().getDay() === 5;
  return (
    <>
      <Global pink={pink} />
      <TextWrapper>
        {pink && <Text>YES 🥳</Text>}
        {!pink && <Text>NO 😢</Text>}
        {pink && <Text>YES 🥳</Text>}
        {!pink && <Text>NO 😢</Text>}
        {pink && <Text>YES 🥳</Text>}
        {!pink && <Text>NO 😢</Text>}
      </TextWrapper>
    </>
  );
}

export default App;
