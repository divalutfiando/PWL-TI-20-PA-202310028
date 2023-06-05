import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Layouts from '../../layouts/Layouts'
import Home from '../../modules/components/Homes/Home'
import Layout from '../Layout/Layout'



export default function BasePages() {
  return (
    <Routes>
            <Route index element={<Layout />} />
            <Route path='layout' element={<Layout />} />
            <Route path='' element={<Explore />} >
                <Route path="feeds" element={<Feeds />} />
                <Route path="reels" element={<Reels />} />
                <Route path="fyp" element={<FYP />} />
            </Route>
          
        </Routes>
  )
}