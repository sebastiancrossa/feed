import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        box-sizing: border-box;

        --color-main: ${({ theme }) => theme.colors.main};
        --color-main-dark: ${({ theme }) => theme.colors.mainDark};
        --color-secondary: ${({ theme }) => theme.colors.secondary};
        --color-white: ${({ theme }) => theme.colors.whiteColor};
        --color-gray: ${({ theme }) => theme.colors.grayColor};
        --color-gray-light: ${({ theme }) => theme.colors.lightGrayColor};
        --color-text: ${({ theme }) => theme.colors.textColor};
        --color-shadow: ${({ theme }) => theme.colors.shadow};
    
    }

    body {
        font-family: "Arial", sans-serif;
        font-weight: 400;
        line-height: 1.6;

        background-color: ${props => props.theme.colors.whiteColor};
        padding: 2rem;
    }

    a, 
    input, 
    textarea,
    button {
        outline: none;
        text-decoration: none;
        font-family: inherit;
    }
`;
