import logo from './logo.svg';
import React from 'react';
//import './App.css';
import Navbar from './components/Navbar';
import Mitoinfotech from './components/Mitoinfotech';
import AllUsers from './components/AllUsers';
import AddUsers from './components/AddUsers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mitoinfotech />} />
        <Route path="/AllUsers" element={<AllUsers />} />
        <Route path="/AddUsers" element={<AddUsers />} />
      </Routes>
    </BrowserRouter>
  )
};
export default App;
