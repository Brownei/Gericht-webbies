import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import BookTable from './BookTable';
import Contact from './Contact';
import Landing from './Landing';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Explore from './Explore';

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='/explore' element={< Explore/>}/>
        <Route path='/book-table' element={< BookTable/>}/>
        <Route path='/contact-us' element={< Contact/>}/>
        <Route path='/landing' element={< Landing/>}/>
        <Route path='/sign-in' element={< Login/>}/>
        <Route path='/sign-up' element={< Register/>}/>
      </Routes>
    </>
  )
}

export default Pages;