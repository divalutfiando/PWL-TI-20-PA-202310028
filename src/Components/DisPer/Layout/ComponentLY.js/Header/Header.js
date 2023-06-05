/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../../../DisPer/Layout/ComponentLY.js/Header/Header.css";

export default function Header() {
  const menuList = [
    { id: 1, name: "Dashboard", path: "/dashboard" },
    { id: 2, name: "Tentang E-Pasar", path: "/ttgpasar" },
    { id: 3, name: "Daftar Bahan Pokok", path: "/Dapabok" },
    { id: 4, name: "Daftar Pasar", path: "/dafpas" },
    { id: 5, name: "Direktori Kota Bogor", path: "/direktori" },
  ];

  return (
    <div class="nv">
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid ">
          <div class=" collapse navbar-collapse justify-content-center " id="navbarNav">
            <div id='main-nav'>
              <ul class="navbar-nav link ">
                {menuList.map((v, index) => (
                  <li class="nav-item tek" key={index}>
                    <NavLink class="nav-link " to={v.path}>
                      {v.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          </div>
      </nav>
    </div>
  );
}
