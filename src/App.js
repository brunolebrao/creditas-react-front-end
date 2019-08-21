import React from 'react';
import Header from './components/Header';
import GlobalStyle from './assets/styles/global';
import Home from './views/Home';

const App = () => (
  <>
    <Header />
    <Home />
    <GlobalStyle />
  </>
);

export default App;
