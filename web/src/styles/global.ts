import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
      ${normalize}
      *,
      *:before,
      *:after {
          box-sizing: inherit;
      }
      button, input, optgroup, select, textarea {
        line-height: 1rem;
      }
      body {
          font-family: 'Lato', Helvetica, Arial sans-serif;
          font-weight: 400;
          box-sizing: border-box;
          font-size: 16px;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: black;
      }
  `;

export default GlobalStyle;
