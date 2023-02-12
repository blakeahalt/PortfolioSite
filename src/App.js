import React from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountryPage from './components/CountryPage.js'
import PhoneBook from './components/PhoneBookPage.js'
import NFT from './components/NFTPage.js'
import StockPage from './components/StockPage.js'
import Nav from './components/NavBar.js'
import Home from './components/Home.js'
import Team from './components/ProjectCards.js'
import Resume from './components/Resume.js'
import About from './components/About.js'

function App() {
  return (
    <div className="App">
        <Nav />
        <Routes>
          <Route
              exact
              path="/"
              element={<Home />}
              Team={Team}
          />
          <Route
              exact
              path="/nftpage"
              element={<NFT />}
          />
          <Route
              exact
              path="/countryPage"
              element={<CountryPage />}
          />
          <Route
              exact
              path="/stockpage"
              element={<StockPage />}
          />
          <Route
              exact
              path="/phonebookpage"
              element={<PhoneBook />}
          />
          <Route
              exact
              path="/about"
              element={<About />}
          />
          <Route
              exact
              path="/resume"
              element={<Resume />}
        />
        </Routes>
        </div>
  );
}

export default App;
