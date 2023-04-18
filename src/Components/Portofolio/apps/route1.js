import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layouts from '../layouts/Layout'
import BasePages from './BasePages'
import Home from '../module/home/Home'

export default function RouteP() {
  return (
    <Routes>
        <Route index element= {<Navigate to='/home' />} />
        <Route path="*" element={<Layouts> <BasePages/> </Layouts>} />
    </Routes>
  )
}
