import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary-font: #ffffff;
        --dark-bg: #1A1F38;
        --svg-filter: invert(9%) sepia(13%) saturate(3557%) hue-rotate(195deg) brightness(94%) contrast(91%);
        --svg-normal: rgba(15, 239, 253, 1);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        color: var(--primary-font);
        background-color: var(--dark-bg);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
        background: none;
        border: none;
    }
    
    [disabled] {
        opacity: .6;
        cursor: not-allowed;
    }

    .filter-svg:hover, button:hover .filter-svg {
        filter: var(--svg-filter);
    }
`