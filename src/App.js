import React from 'react';
import Banner from './components/Banner.js';
// import Footer from './components/Footer.js';
import './App.css';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <Banner/>
      <MainContent/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
