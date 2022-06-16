import '../styles/globals.css'
import Head from 'next/head'
import Link from 'next/link'
import { createGlobalStyle } from "styled-components";
import { useState } from 'react';
import AppProvider from '../utils/provider';
import NavBar from '@/comps/NavBar';
import HamburgerMenu from '@/comps/HamburgerMenu';

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

  const [menuOpen, setMenuOpen] = useState(false);

  const triggerMenu = () => {
      setMenuOpen(!menuOpen);
      // console.log(menuOpen);
  }


  return <AppProvider>
    <NavBar onHambClick={triggerMenu}/>
    {
      menuOpen ?
      <HamburgerMenu
        onMenuItemClick={triggerMenu}
      />
      :
      <></>
    }
    <div>
      <Head>
        <title>Saihajvir Gill | Front End Developer Portfolio | BCIT D3 2022</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name ="author" content="saihajvir gill" />
        <meta name="keywords" content="react, nextjs, developer, front end, portfolio, bcit, d3, ui, ux, design, coding, html, css, javascript" />
        <meta name="description" content="2022 bcit d3 front end developer portfolio by saihajvir gill" />
      </Head>
    </div>
  <GlobalStyle />
  <Component {...pageProps} />
  </AppProvider>
}

export default MyApp;
