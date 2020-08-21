/* eslint-disable */
import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components'
import pink from './pink.png'

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
    ${({pink}) => pink ? css`
    background: var(--pink);
    color: var(--black);
    ` : css`
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
    transform: translate(-50%, -50%) rotate(45deg) scale(0.5);
  }
`

const Text = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 128px;
  font-weight: bold;
  font-family: sans-serif;
`

function App() {
  const pink = new Date().getDay() === 5;
  return (
  <>
    <Global pink={pink}/>
    {pink && <Text>YES 🥳</Text>}
    {!pink && <Text>NO 😢</Text>}
  </>
  );
}

export default App;
