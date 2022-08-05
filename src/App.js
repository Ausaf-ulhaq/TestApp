import React from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <>
    <Header/>
    <Home />
    <Footer year="2022" month="August" />
    </>
  )
}

export default App;