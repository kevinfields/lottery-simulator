import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate} from "react-router-dom";
import HomePage from './pages/HomePage';
import Links from './components/Links';
import UnrankedPage from './unranked/pages/UnrankedPage';
import FishingPage from './fishing/pages/FishingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path='/'
          element={
            <HomePage />
          }
        />
        <Route
          path='/unranked-game'
          element={<UnrankedPage />}
        />
        <Route
          path='/fishing-pond'
          element={<FishingPage />}
        />
      </Routes>
      <Links />
    </div>
  );
}

export default App;
