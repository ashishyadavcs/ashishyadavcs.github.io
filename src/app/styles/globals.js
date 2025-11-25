"use client";

import { createGlobalStyle, css } from "styled-components";
import { Inter } from "next/font/google";
import media from "@/app/config/media";
const inter = Inter({
    fallback: ["Roboto"],
    display: "swap",
    preload: false,
    subsets: ["latin"],
    family: "Roboto",
});
const GlobalCSS = createGlobalStyle`
${css`
    :root {
        --background: #ffffff;
        --foreground: #171717;
        --container-size: 6%;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        color: var(--foreground);
        background: var(--background);
        font-family: ${inter.style.fontFamily};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .container {
        width: 100%;
        padding-inline: var(--container-size);
        margin: 0 auto;
    }
    img {
        max-width: 100%;
    }
    .heading {
        font-size: clamp(1.8rem, 3vw, 2.5rem);
        margin: 20px 0;
    }
    .center {
        justify-content: center;
    }
    .btn-group {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin: 20px 0;
        a,
        button {
            ${media.sm} {
                width: 100%;
            }
        }
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`}
`;
export default GlobalCSS;
