import { Html, Head, Main, NextScript } from "next/document";

import { useThemeContext } from "../utils/darkMode";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Miftahul Anwar's personal site" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
