import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'ubuntu';
  }
  html, body, #root {
    height: 100%;
  }
  body {
    font: 14px 'ubuntu', sans-serif;
    background: ${colors.concrete};
    -webkit-font-smoothing: antialiased !important;
  }
`;
