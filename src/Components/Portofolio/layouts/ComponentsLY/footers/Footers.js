import React from 'react'
import '../../../assets/css/footers.css'
export default function Footers() {
    return (
        <footer style={{marginTop:"2rem", color: 'white'}} className="container foot">
            <p>&copy; 2023 Diva, Inc. & middot; 
            <a href="https://wa.me/083811050582" className='ms-1' target={"_blank"}>Contact</a></p>
        </footer>
    )
}