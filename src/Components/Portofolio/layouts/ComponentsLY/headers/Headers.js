import React from "react";
import { NavLink } from "react-router-dom";
import '../../../assets/css/nav.css'

export default function Headers() {
  const navlist = [
    { id: 1, name: "Home", path: "/home", icon: "bi-house-door" },
    { id: 2, name: "About", path: "/about", icon: "bi-compass" },
    { id: 3, name: "Portofolio", path: "/portofolio", icon: "bi-house-door" },
    { id: 4, name: "Contact", path: "/contact", icon: "bi-house-door" },
  ];

  return (
    <header class="header">
      <nav className="navbar navbar-expand-md fixed-top nav ">
        <div className="container">
          <a className="navbar-brand text-light" style={{cursor: 'default'}} href="#">
            <img
              src="https://seeklogo.com/images/P/P_and_amp_G-logo-A9236E27E1-seeklogo.com.png"
              alt="ibik-logo"
              style={{ height: "40px", cursor: 'default'}}
            />
          </a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="d-flex w-100 justify-content-end">
              <div id="maian-nav" class="mainnav">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  {navlist.map((v, index) => (
                    <li className="nav-item me-1" key={index} class='kotak'>
                      <NavLink
                        className="nav-link text-hover-succes px-3 text-light"
                        to={v.path} 
                      >
                        <i className={"bi me-2 fs-5" + v.icon}></i>
                        {v.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
