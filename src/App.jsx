import React from "react";

import GlobalFonts from './assets/fonts/fonts';
import GlobalStylesReset from './assets/reset';
import Router from './Router';

function App() {
  return (
    <div>
      <GlobalFonts />
      <GlobalStylesReset />
      
      <Router></Router>
    </div>
  )
}

export default App;
