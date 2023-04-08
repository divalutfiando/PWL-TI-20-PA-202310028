import React, { Component } from 'react'
import Form from './Form'

export default class Signin extends Component {
  render() {
    return (
      <div id="signin" className='d-flex flex-column flex-root'>
        <div className="d-flex flex-column flex-column-fluid">
            <Form />
            <div className="d-flex flex-center flex-column-auto p-10">
                <div className="d-flex align-items-center fw-bold fs-6">
                    <a href="#" className="text-muted text-hover-primary px-2">About</a>
                    <a href="https://wa.me/0813456789" className="text-muted text-hover-primary px-2">Contact</a>
                </div>
            </div>
        </div>
      </div>

    )
  }
}