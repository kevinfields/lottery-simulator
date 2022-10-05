import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate} from "react-router-dom";
import HomePage from './pages/HomePage';
import Links from './components/Links';
import UnrankedPage from './unranked/pages/UnrankedPage';

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
      </Routes>
      <Links />
    </div>
  );
}

export default App;
