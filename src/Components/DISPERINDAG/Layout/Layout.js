import React from 'react'
import Header from '../Layout/ComponentLY.js/Header/Header'
import Banner from '../Layout/ComponentLY.js/Banner/Banner'

export default function Layout() {
  return (
    <div id="main-layout" style={{backgroundColor: 'Black', width: '100%', height: '200vh'}}>
        <Banner/>
        <Header/>
        
       
    </div>
  )
}


