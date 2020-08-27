import React from "react";
import { AppProps } from "next/app";

import "../global.sass";

function CustomApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default CustomApp;
