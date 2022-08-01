import React from "react";

import GlobalFonts from './assets/fonts/fonts';
import GlobalStylesReset from './assets/reset';
import Router from './Router';

import HeaderDesktopGuest from "./components/Header/HeaderDesktopGuest"

function App() {
  return (
    <div>
      <GlobalFonts />
      <GlobalStylesReset />

      <HeaderDesktopGuest />

      <Router></Router>
    </div>
  )
}

export default App;
