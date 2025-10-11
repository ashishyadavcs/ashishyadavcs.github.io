import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  :root {
    /* Light theme colors - Modern vibrant palette */
    --background: #fafafa;
    --text: #1a1a1a;
    --primary: #6366f1;
    --secondary: #64748b;
    --accent: #f1f5f9;
    --card-bg: #ffffff;
    --card-border: #e2e8f0;
    --navbar-bg: rgba(255, 255, 255, 0.9);
    --footer-bg: #f8fafc;
    --button-hover: #4f46e5;
    --shadow: rgba(0, 0, 0, 0.1);
    --shadow-lg: rgba(0, 0, 0, 0.15);
    --gradient-primary: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    --gradient-accent: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
    
    /* Spacing system */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    --spacing-3xl: 4rem;
    
    /* Border radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
  }

  html[data-theme='dark'],
  [data-theme='dark'] {
    --background: #0f0f23;
    --text: #f1f5f9;
    --primary: #818cf8;
    --secondary: #94a3b8;
    --accent: #1e293b;
    --card-bg: #1e1e2e;
    --card-border: #374151;
    --navbar-bg: rgba(15, 15, 35, 0.9);
    --footer-bg: #0a0a15;
    --button-hover: #a5b4fc;
    --shadow: rgba(0, 0, 0, 0.3);
    --shadow-lg: rgba(0, 0, 0, 0.4);
    --gradient-primary: linear-gradient(135deg, #818cf8 0%, #a78bfa 100%);
    --gradient-accent: linear-gradient(135deg, #1e293b 0%, #374151 100%);
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  html[data-theme] {
    color-scheme: light;
  }

  html[data-theme="dark"] {
    color-scheme: dark;
  }

  body {
    font-family: var(--font-geist-sans), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background);
    color: var(--text);
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    line-height: 1.7;
    overflow-x: hidden;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: var(--primary);
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      color: var(--button-hover);
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: var(--spacing-lg);
    letter-spacing: -0.025em;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }

  h4 {
    font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  }

  p {
    margin-bottom: var(--spacing-lg);
    line-height: 1.7;
    color: var(--text);
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:focus-visible {
      outline: 2px solid var(--primary);
      outline-offset: 2px;
    }
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: var(--radius-md);
  }

  code {
    font-family: var(--font-geist-mono), 'Fira Code', 'Monaco', 'Cascadia Code', monospace;
    background: var(--accent);
    padding: 0.2em 0.4em;
    border-radius: var(--radius-sm);
    font-size: 0.9em;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--accent);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--secondary);
    border-radius: var(--radius-sm);
    
    &:hover {
      background: var(--primary);
    }
  }

  /* Utility classes */
  .section {
    padding: var(--spacing-3xl) var(--spacing-xl);
    
    @media (max-width: 768px) {
      padding: var(--spacing-2xl) var(--spacing-md);
    }
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    padding: 0 var(--spacing-md);
    
    @media (max-width: 768px) {
      padding: 0 var(--spacing-sm);
    }
  }

  .text-gradient {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    box-shadow: 0 4px 6px -1px var(--shadow);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      box-shadow: 0 10px 15px -3px var(--shadow-lg);
      transform: translateY(-2px);
    }
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-fade-in {
    animation: fadeIn 0.6s ease-out;
  }

  .animate-slide-in {
    animation: slideIn 0.6s ease-out;
  }
`;

export default GlobalStyles;
