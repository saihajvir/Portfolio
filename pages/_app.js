import '../styles/globals.css'
import Head from 'next/head'
import Link from 'next/link'
import { createGlobalStyle } from "styled-components";
import AppProvider from '../utils/provider';

const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: "Circular";
    src: url("/fonts/Circular/CircularStd-Book.otf");
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }
  @font-face {
  font-family: "Circular";
  src: url("/fonts/Circular/CircularStd-Light.otf");
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  }
  @font-face {
    font-family: "Circular";
    src: url("/fonts/Circular/CircularStd-Bold.otf");
    font-style: normal;
    font-weight: bold;
    font-display: swap;
  }
  @font-face {
    font-family: "Circular";
    src: url("/fonts/Circular/CircularStd-Light Italic.otf");
    font-style: italic;
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: "Circular";
    src: url("/fonts/Circular/CircularStd-BookItalic.otf");
    font-style: italic;
    font-weight: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Circular";
    src: url("/fonts/Circular/CircularStd-BoldItalic.otf");
    font-style: italic;
    font-weight: bold;
    font-display: swap;
  }
  @font-face {
    font-family: "TTT-Next";
    src: url("/fonts/TT-Travels-Next/TT-Travels-Next-ExtraBold.otf");
    font-style: normal;
    font-weight: bolder;
    font-display: swap;
  }
  @font-face {
    font-family: "TTT-Next";
    src: url("/fonts/TT-Travels-Next/TT Travels Next Bold.otf");
    font-style: normal;
    font-weight: bold;
    font-display: swap;
  }
`;

function MyApp({ Component, pageProps }) {
  return <AppProvider>
    <div>
      <Head>
        <title>Saihaj Gill</title>
      </Head>
    </div>
  <GlobalStyle />
  <Component {...pageProps} />
  </AppProvider>
}

export default MyApp;
