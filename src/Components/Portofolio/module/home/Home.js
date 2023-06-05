import React, { Component } from "react";
import "../../assets/css/home.css";
import Portofolio from "../portofolio/Portofolio";

export default class Home extends Component {
  render() {
    return (
      <div class="container n" style={{ marginTop: "6rem", }}>
        <div class="row align-items-center text-light roq">
          <div class="col kiri">
            <h1>My Portofolio</h1>
            <p>
              Mollit sunt nostrud aliqua reprehenderit labore esse mollit sunt
              anim. Est tempor proident excepteur amet est mollit minim. Ad
              commodo laborum officia culpa laborum elit enim proident enim
              proident adipisicing.
            </p>
          </div>
          <div class="col  text-center kanan">
            <div class="foto">
              <img
                src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                class="figure-img img-fluid rounded po"
                alt="#"
              />
            </div>
          </div>
        </div>
      </div>
      

    
    );
  }
}
