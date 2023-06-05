import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DaftarPasar from '../Module/DaftarPasar/DaftarPasar'
import Dashboard from '../Module/Dashboard/Dashboard'
import Direktori from '../Module/Direktori/Direktori'
import TtgEpasar from '../Module/Ttg Epasar/TtgEpasar'
import Dabapok from '../Module/Dabapok/Dabapok'


export default function BasePages() {
  return (
    <Routes>
        <Route index element={< Dashboard/>} />
        <Route path='dashboard' element={<Dashboard />} />
        
        <Route path='ttgpasar' element={<TtgEpasar />} />

        <Route path='dapok' element={<Dabapok />} />

        <Route path='dafpas' element={<DaftarPasar />} />

        <Route path='direktori' element={<Direktori />} />
    </Routes>
  )
}
