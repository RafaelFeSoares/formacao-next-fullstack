import GlobalStyle from "@src/theme/GlobalStyle";
import ThemeProvider from "@src/theme/ThemeProvider";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
