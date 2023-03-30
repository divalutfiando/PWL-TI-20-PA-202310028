import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Categories from './widgets/Categories'

export default class Explore extends Component {
    render() {
        return (
            <div style={{marginTop:'7rem'}} className='container'>
                <h1 >Hello this is a Explore page</h1>

                <div className="mt-10">
                    <div className="row">
                        <div className="col-lg-8">
                            <Outlet />
                        </div>
                        <div className="col-lg-4">
                            <Categories />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}