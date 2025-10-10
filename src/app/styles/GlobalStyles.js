import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    /* Light theme colors */
    --background: #ffffff;
    --text: #333333;
    --primary: #0070f3;
    --secondary: #6c757d;
    --accent: #f0f0f0;
    --card-bg: #ffffff;
    --card-border: #e0e0e0;
    --navbar-bg: rgba(255, 255, 255, 0.8);
    --footer-bg: #f5f5f5;
    --button-hover: #0051a8;
    --shadow: rgba(0, 0, 0, 0.05);
  }

  [data-theme='dark'] {
    --background: #121212;
    --text: #f5f5f5;
    --primary: #3694ff;
    --secondary: #a0a0a0;
    --accent: #222222;
    --card-bg: #1e1e1e;
    --card-border: #333333;
    --navbar-bg: rgba(30, 30, 30, 0.8);
    --footer-bg: #0a0a0a;
    --button-hover: #63aeff;
    --shadow: rgba(255, 255, 255, 0.05);
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background);
    color: var(--text);
    transition: background-color 0.3s, color 0.3s;
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    color: var(--primary);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  code {
    font-family: var(--font-geist-mono), monospace;
  }

  .section {
    padding: 5rem 2rem;
    
    @media (max-width: 768px) {
      padding: 3rem 1rem;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }
`;

export default GlobalStyles;
