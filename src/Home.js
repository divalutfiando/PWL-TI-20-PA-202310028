import React, { Component } from 'react'
import Widget from './Widget'


export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Selamat Datang Di IBIK</h1>

        <h1>jsx</h1>
        <Widget />

        <h1>expression</h1>
        {Widget()}

        
        





      </div>

      
    )
  }
}
