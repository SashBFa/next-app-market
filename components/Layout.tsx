import {
  AppBar,
  Box,
  Container,
  createTheme,
  CssBaseline,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import Head from "next/head";
import NextLink from "next/link";
import classes from "./utils/classes";

interface layoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const Layout = (props: layoutProps) => {
  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
      },
    },
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      mode: "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" sx={classes.appbar}>
          <Toolbar sx={classes.toolbar}>
            <NextLink href="/" passHref>
              <Link>
                <Typography sx={classes.brand}>BookMarket</Typography>
              </Link>
            </NextLink>
          </Toolbar>
        </AppBar>
        <Container component="main" sx={classes.main}>
          {props.children}
        </Container>
        <Box component="footer" sx={classes.footer}>
          <Typography>All rights reserved. Book Market.</Typography>
        </Box>
      </ThemeProvider>
    </>
  );
};

Layout.defaultProps = {
  title: "E-commerce pour livre d'occasion - BookMarket",
  description: " Vendez, achetez et retrouver les livres qui vous plaisent",
};

export default Layout;
