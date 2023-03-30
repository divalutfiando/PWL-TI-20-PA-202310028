import React from 'react'
import {Link } from 'react-router-dom'
import './eror.css';

export default function Error404() {
  return (
    <div class="container box">
      {/* <h1>An error has occured.</h1> */}
      <h1 class="text">404 Page not found.</h1>
      {/* <h1> <span class="ascii">(╯°□°）╯︵ ┻━┻</span></h1> */}
      {/* <Link to="/home">Go back</Link> */}
    </div>
  )
}