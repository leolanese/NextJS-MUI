import {CacheProvider} from "@emotion/react";
import {CssBaseline,ThemeProvider} from "@mui/material";
import Head from "next/head";
import Script from "next/script";
import PropTypes from "prop-types";
import '../styles/globals.css';
import lightTheme from '../styles/theme/lightTheme';
import createEmotionCache from '../utility/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: {Component: any; emotionCache?: any; pageProps: any;}) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
      <Head>
        <title>NextJS & MUI</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        onError={(e) => {
          console.log("error loading bootstrap.bundle: ", e);
        }}
      />
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>

          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />

          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
