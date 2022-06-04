import "../styles/index.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
