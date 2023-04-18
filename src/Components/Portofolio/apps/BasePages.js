import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../module/home/Home'
import About from '../module/about/About'
import Contact from '../module/contact/Contact'
import Portofolio from '../module/portofolio/Portofolio'

export default function BasePages() {
  return (
    <Routes>
        <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='portofolio' element={<Portofolio />} />
    </Routes>
  )
}
