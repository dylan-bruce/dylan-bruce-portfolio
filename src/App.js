import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";

import './App.css';

import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Home from './layout/home/Home';
import Project from './layout/project/Project';
import Contact from './layout/contact/Contact';

function App() {
  return (
    <>
      <div className='header'>
        <Header />
      </div>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Navigate replace to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
}

export default App;
