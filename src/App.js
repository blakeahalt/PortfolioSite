import React from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountryPage from './components/CountryPage.js'
import PhoneBook from './components/PhoneBookPage.js'
import NFT from './components/NFTPage.js'
import StockPage from './components/StockPage.js'
import Home from './components/Home2.js'
import Team from './components/ProjectCards.js'
import Resume from './components/Resume.js'
import About from './components/AboutPage.js'
import Blog from './components/Devto.js'
import ArtPage from './components/ArtPage.js'
import ProjectsPage from './components/ProjectsPage.js'
import ArtPageSpiro from './components/ArtPage-spiroPage.js'
import ArtPagePortraits from './components/ArtPage-portraitPage.js'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route
              exact
              path="/"
              element={<Home />}
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
              path="/art"
              element={<ArtPage />}
          />
          <Route
              exact
              path="/art/spiro/"
              element={<ArtPageSpiro />}
          />
          <Route
              exact
              path="/art/portraits/"
              element={<ArtPagePortraits />}
          />
          <Route
              exact
              path="/projects"
              element={<ProjectsPage />}
          />
          <Route
              exact
              path="/blog"
              element={<Blog />}
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
