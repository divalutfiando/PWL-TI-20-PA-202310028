import React from "react";
import ModalPopUp from "./ModalPopUp";
import Headers from "./Headers";

export default function Layout(props) {
  return (
    <div id="main-layout" className="pisi">
      <Headers />

      <main className="isi">{props.children}</main>

     <ModalPopUp />
    </div>
  );
}
