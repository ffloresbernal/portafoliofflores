import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Aboutme } from '../aboutme/Aboutme';
import { Home } from '../home/Home';
import { Navbar } from '../layout/Navbar'
import { Proyects } from './../proyects/Proyects'
import { Resume } from './../resume/Resume'

export const Routess = () => {
  return (
    <BrowserRouter>
    {/* HEADER */}
        <Navbar/>

    {/* BODY */}
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/about-me' element={<Aboutme />}/>
            <Route path='/proyects' element={<Proyects />}/>
            <Route path='/cv' element={<Resume />}/>
        </Routes>

    {/* FOOTER */}

    </BrowserRouter>
  )
}
