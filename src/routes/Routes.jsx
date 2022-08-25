import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Aboutme } from '../aboutme/Aboutme';
import { Home } from '../home/Home';
//import { Dicegame } from '../home/Dicegame';
import { Navbar } from '../layout/Navbar'
import { Projects } from '../proyects/Projects'
import { Resume } from './../resume/Resume'

import {Bodypage} from './Routes.component'

export const Routess = () => {
  return (
  <Bodypage>
    <BrowserRouter>
        {/* HEADER */}
            <Navbar/>
            {/* <Dicegame /> */}

        {/* BODY */}
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/home' element={<Home />}/>
                <Route path='/about-me' element={<Aboutme />}/>
                <Route path='/proyects' element={<Projects />}/>
                <Route path='/cv' element={<Resume />}/>
            </Routes>

        {/* FOOTER */}

      </BrowserRouter>
    </Bodypage>
  )
}
