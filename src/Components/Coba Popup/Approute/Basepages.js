import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Isian from '../Popup/Isian'
import FormPesanan from "../Popup/FormPesanan"
import Profile from "../Layout/Profile"

export default function Basepages() {
  return (
    <Routes>
        <Route index element={<Isian />}/>
        <Route path='isian' element={<Isian />}/>
        <Route path='form' element={<FormPesanan/>}/>
        <Route path='profile' element={<Profile/>}/>
    </Routes>
  )
}
