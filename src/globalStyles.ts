import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        padding: 2rem;
        background-color: #212121;
        color: #878787;
        font-size: 1.6rem;
        font-family: 'Arial', sans-serif;
    }

    button {
        font-size: 1.6rem;
    }
`;

export default GlobalStyles;
