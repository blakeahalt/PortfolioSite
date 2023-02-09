import React from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountryPage from './components/CountryPage.js'
import PhoneBook from './components/PhoneBook.js'
import { Parallax } from "react-parallax";
import WorldMap from "./assets/WorldMap_opacity.png"
import Nav from './components/NavBar.js'
import Home from './components/Home.js'
import Team from './components/Team.js'
import Resume from './components/Resume.js'

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
              path="/countryPage"
              element={<CountryPage />}
          />
          <Route
              exact
              path="/phoneBook"
              element={<PhoneBook />}
          />
        </Routes>
        </div>
  );
}

export default App;
