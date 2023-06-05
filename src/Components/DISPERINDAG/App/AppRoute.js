import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Direktori from '../Module/direktori/Direktori'
import DaftarPasar from '../Module/Home/DaftarPasar'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function AppRoute() {
  return (
    <Routes>
        <Route index element ={<Layout/>} />
          <Route path='layout' element={<Layout />} >
            <Route path="direktori" element={<Direktori />} />
            <Route path="DaftrPsr" element={<DaftarPasar />} />
          </Route>
    </Routes>
  )
}
