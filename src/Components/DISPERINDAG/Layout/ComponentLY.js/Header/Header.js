/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';  
import './Header.css'

export default function Header() {
  return (
    <div class="nv">
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid ">
                {/* <a class="navbar-brand text-light" href="#">EPASAR</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button> */}
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav nav-pills ">
                    <li class="nav-item ">
                    <a class="nav-link active" aria-current="page" href="#">Beranda</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Tentang E-pasar</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link " href="#">Daftar Bahan Pokok</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="./">Daftar Pasar</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Direktori Kota Bogor</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
