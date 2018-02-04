import { injectGlobal } from 'styled-components';

injectGlobal`
  /* @font-face {
    font-family: 'Operator Mono';
    src: url('../fonts/Operator-Mono.ttf');
  } */

  /* Apply a natural box layout model to all elements, but allowing components to change */
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;