import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --shape: #fff;
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;
    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    
    @media(max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: var(--background);
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .react-modal-overlay {
    align-items: center;
    background-color: #00000088;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }
  
  .react-modal-content {
    background-color: var(--background);
    border-radius: 0%.25rem;
    max-width: 576px;
    padding: 3rem;
    position: relative;
    width: 100%;
  }
`
