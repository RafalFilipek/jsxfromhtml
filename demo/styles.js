import { injectGlobal } from 'styled-components';

injectGlobal`
  html, body {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background-color: #2196F3;
    margin: 0;
    padding: 2rem;
    color: #333;
    letter-spacing: 0.3px;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  pre, code {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  }
  a {
    color: #4CAF50;
  }
`;