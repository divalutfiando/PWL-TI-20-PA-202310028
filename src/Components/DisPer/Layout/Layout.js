import React from 'react'
import Header from '../Layout/ComponentLY.js/Header/Header'
import Banner from './ComponentLY.js/Banner/Banner'


export default function Layout(props) {
  return (
    <div id="main-layout" style={{backgroundColor: 'Black', width: '100%', height:'150vh'}}>
        <Banner />
        <Header />

        <main class="bc" >
            {props.children}
        </main>
       
    </div>
  )
}


