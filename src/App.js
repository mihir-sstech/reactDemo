import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Slider from './components/slider/slider';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* <Route path='/' element={<Slider />} /> */}
          <Route />
        </Routes>
        <Slider />
      </Router>
    </>
  );
}

export default App;
