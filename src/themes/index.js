import { createGlobalStyle, keyframes } from "styled-components";

const shareColor = {
  warning: "#f77427",
  success: "#05b584",
  danger: "#ec314b"
};

export const lightTheme = {
  borderRadius: "4px",
  colors: {
    primary: "#4caf50",
    background: "#F4F6F8",
    backgroundLight: "#ffffff",
    text: "#212b36",
    textLight: "black",
    ...shareColor
  }
};

export const darkTheme = {
  borderRadius: "4px",
  colors: {
    primary: "#6ca22d",
    background: "#19212a",
    backgroundLight: "#27303a",
    text: "#ffffff",
    textLight: "white",
    ...shareColor
  }
};

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `;

const customMediaQuery = maxWidth => `@media (max-width: ${maxWidth}px)`;

export const mediaQuery = {
  custom: customMediaQuery,
  dekstop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576)
};
export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }
    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        transition: all 0.25s linear;
    }
    a {
        text-decoration: none;
        color: ${props => props.theme.colors.primary};
    }
    .container {
        max-width: 800px;
        margin: 0 auto;
        min-height: 100vh;
    }
    .center-text {
        text-align: center;
    }
    .app-logo {
        pointer-events: none;
        animation: ${spin} infinite 10s linear;
        g {
            fill: ${props => props.theme.colors.primary}
        }
    }
`;
