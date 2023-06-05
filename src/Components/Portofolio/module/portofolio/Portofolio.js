import React, { Component } from 'react'
import "./Port.css"


export default class Portofolio extends Component {
  render() {
    return (
      <div style={{marginTop:'7rem', color: 'white'}}>

      <div class="judul1"> 
          <h1>KEAHLIAN</h1>
      </div>

{/* --------------- */}

        <ul class="keahlian">
          <li class="bul" style={{color: '#ef436b'}}>
            <span class="base"></span>
            <span class="title">HTML5 </span>
            <span class="icon">
              <ion-icon name="logo-html5"></ion-icon>
            </span>
          </li>

          <li class="bul" style={{color: '#ffce5c'}}>
            <span class="base"></span>
            <span class="title">CSS3 </span>
            <span class="icon">
              <ion-icon name="logo-css3"></ion-icon>
            </span>
          </li>

          <li class="bul" style={{color: '#05c770'}}>
            <span class="base"></span>
            <span class="title">Javascript </span>
            <span class="icon">
              <ion-icon name="logo-javascript"></ion-icon>
            </span>
          </li>

          <li class="bul" style={{color: '#40ff00'}}>
            <span class="base"></span>
            <span class="title">CorelDraw </span>
            <span class="icon">
             <h1 class="cst">C</h1>
            </span>
          </li>

          <li class="bul" style={{color: '#8600FF'}}>
            <span class="base"></span>
            <span class="title">Adobe Family </span>
            <span class="icon">
              <h1 class="cst">A</h1>
            </span> 
          </li>

        </ul>
      
{/* --------------- */}

    <div class="card mb-3 justify-content-center" style={{width: "18rem"}} >
      <img src="https://png.pngtree.com/thumb_back/fw800/background/20210226/pngtree-landscape-trees-under-street-lights-at-night-image_566943.jpg" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">LINK</a>
        </div>
    </div>

  
{/* --------------- */}


      </div>
    )
  }
}
