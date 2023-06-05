import React from 'react'
import Footers from './ComponentsLY/footers/Footers'
import HeaderNav from './ComponentsLY/headers/Headers'
import '../assets/css/layout.css'
import Portofolio from '../module/portofolio/Portofolio'

export default function Layouts(props) {
    return (
        <div id="main-layout" class="inti">
            <HeaderNav />

            <main className='mt-20 py-10'>
                {props.children}
            </main>
           
            
            <Footers />     
        </div>
    )
}