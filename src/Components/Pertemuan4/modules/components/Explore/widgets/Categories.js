import React from 'react'
import { NavLink } from 'react-router-dom'
import "./widget.css"

export default function Categories() {
    const categories = [{ id: 1, name: "Feeds", path: "/feeds", icon: "bi-camera" }, 
                        { id: 2, name: "Reels", path: "/reels", icon: "bi-camera-reels" }, 
                        { id: 3, name: "FYP", path: "/fyp", icon: "bi-rss" }];
    return (
        <div id='categories' className='card border' class="bgcategories">
            <div className="card-header">
                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder text-light">Category Explore</span><br/>
                    <span className="text-gray-400 mt-3 fw-bold fs-6 ">Choose one of categories</span>
                </h3>
            </div>
            <div className="card-body">
                <ul class="nav flex-column">
                    {categories.map((v, index) => (
                        <li   class="nav-item mb-2 jk" key={index}>
                            <NavLink class="nav-link text-light" aria-current="page" to={"/explore"+v.path}>
                                <div className="symbol symbol-30px">
                                    <span className="symbol-label">
                                        <i className={"fs-4 bi " + v.icon}></i>
                                    </span>
                                </div>
                                <span style={{marginTop:'-5px', textDecoration:'none'}} className=" fs-4 ms-2 fw-bold text1">{v.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}