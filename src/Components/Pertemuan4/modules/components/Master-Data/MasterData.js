import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default class MasterData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, name: "Products", link: "/master-data/products" },
        { id: 2, name: "UsersAcc", link: "/master-data/useracc" },
      ],
    };
  }
  render() {
    return (
      <div id="master-data" className="container" style={{marginTop: '7rem'}}>
        <div className="row items mb-8">
          {this.state.items.map((v, index) => (
            <div className="col-sm-12 col-lg-3 item" key={index}>
              <NavLink to={v.link} className="card bg-white">
                <div className="card-body text-center">
                  <h3 className="text-dark text-hover-primary">{v.name}</h3>
                  <p className="mb-0 text-muted">Master data control {v.name}</p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
        <div className="">
            <Outlet />
        </div>
      </div>
    );
  }
}