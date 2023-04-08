import React from 'react'
import { Link } from 'react-router-dom'

export default function Form() {
  return (
    <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
        <Link to={"/"} className="mb-12">
            <img src="https://www.ibik.ac.id/wp-content/uploads/2023/03/logo-ibik-web.png" alt="logo-ibik" className='h-40px' />
        </Link>
        <div className="w-lg-500px rounded shadow-sm p-10 p-lg-15 mx-auto" style={{ backgroundColor:"#80008008" }}>
            <form method="post" className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework' autoComplete='off'>
                <div className="text-center mb-10">
                    <h1 className="text-dark mb-3">Sign In to Portal</h1>
                    <div className="text-gray-400 fw-bold fs-4">
                        New Here ?
                        <Link to={"/signup"} className="ms-2 text-decoration-none">Create an account</Link>
                    </div>
                </div>
                <div className="fv-row mb-10 fv-plugins-icon-container">
                    <label className="form-label fs-6 fw-bolder text-dark">Email</label>
                    <input type="email" name="email" className='form-control form-control-lg' />
                </div>
                <div className="fv-row mb-10 fv-plugins-icon-container">
                    <label className="form-label fs-6 fw-bolder text-dark">Password</label>
                    <input type="password" name="password" className='form-control form-control-lg' />
                </div>
                <div className="text-center">
                    <button className="btn btn-lg btn-primary w-100 mb-5" type='submit'>Continue</button>
                </div>
            </form>
        </div>
    </div>
  )
}