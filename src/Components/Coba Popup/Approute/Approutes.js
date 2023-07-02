import React from 'react'
import {Navigate, Route, Routes } from 'react-router-dom'
import BasePages from '../Approute/Basepages'
import Layout from '../Layout/Layout'

export default function Approutes() {
  return (
    <Routes>
        <Route index element={<Navigate to='/isian'/>}/>
        <Route path='*' element={<Layout><BasePages/></Layout>}/>
    </Routes>
  )
}
