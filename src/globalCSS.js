import { injectGlobal } from 'styled-components';

injectGlobal`
  /* @font-face {
    font-family: 'Operator Mono';
    src: url('../fonts/Operator-Mono.ttf');
  } */

  * { box-sizing: border-box; }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;