import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Categories() {
    const categories = [{ id: 1, name: "Feeds", path: "/feeds", icon: "bi-camera" }, 
                        { id: 2, name: "Reels", path: "/reels", icon: "bi-camera-reels" }, 
                        { id: 3, name: "FYP", path: "/fyp", icon: "bi-rss" }];
    return (
        <div id='categories' className='card border'>
            <div className="card-header">
                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder text-dark">Category Explore</span><br/>
                    <span className="text-gray-400 mt-3 fw-bold fs-6">Choose one of categories</span>
                </h3>
            </div>
            <div className="card-body">
                <ul class="nav flex-column">
                    {categories.map((v, index) => (
                        <li  style={{textDecoration:'none'}} class="nav-item mb-2" key={index}>
                            <NavLink class="nav-link text-dark text-hover-primary" aria-current="page" to={"/explore"+v.path}>
                                <div className="symbol symbol-30px">
                                    <span className="symbol-label">
                                        <i className={"fs-4 bi " + v.icon}></i>
                                    </span>
                                </div>
                                <span style={{marginTop:'-5px'}} className=" fs-4 ms-2 fw-bold">{v.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}