import "../styles/index.css";
import type { AppProps } from "next/app";
// import Layout from "../components/divers/Layout";
// import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

interface myAppProps {
  Component: any;
  pageProps: AppProps;
  emotionCache: any;
}

const clientSideEmotionCache = createCache({ key: "css" });

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: myAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;
