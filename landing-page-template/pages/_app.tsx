import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LightTheme } from "@enlear/bit-landing-page-template.themes.light-theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LightTheme>
      <Component {...pageProps} />
    </LightTheme>
  );
}

export default MyApp;
