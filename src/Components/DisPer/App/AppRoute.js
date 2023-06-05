import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Layout from '../../DisPer/Layout/Layout';
import BasePages from '../../DisPer/App/BasePages';

export default function AppRoute() {
  return (
    <Routes>
        <Route index element ={<Navigate to='/Dashboard'/>} />
        
        <Route path ='*' element={<Layout> <BasePages /> </Layout>} />
    </Routes>
  )
}
