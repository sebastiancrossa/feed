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

        --color-main: ${props => props.theme.colors.main};
        --color-secondary: ${({ theme }) => theme.colors.secondary}
        --color-white: ${props => props.theme.colors.whiteColor};
        --color-gray: ${props => props.theme.colors.grayColor};
        --color-gray-light: ${({ theme }) => theme.colors.lightGrayColor};
        --color-text: ${props => props.theme.colors.textColor};
        --color-shadow: ${props => props.theme.colors.shadow};
    
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
