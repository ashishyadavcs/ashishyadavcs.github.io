import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.js";
import StyledComponentsRegistry from "./components/Registry";
import Layout from "./components/layout";
import GlobalCSS from "./styles/globals.js";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="google-site-verification"
                    content="6g2dD6ZYcYfD3YBYpGU0O2cSRZlSrufZqXcL7D_shzk"
                />
            </head>
            <body>
                <StyledComponentsRegistry>
                    <GlobalCSS />
                    <Layout>{children}</Layout>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
