import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #009cde;
      
    text-rendering: optimizeLegibility !important;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;
