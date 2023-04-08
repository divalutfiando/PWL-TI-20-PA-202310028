import React from "react";

export default function Error404() {
  return (
    <div className="container">
        <div className="m-auto p-5 w-50 mt-10">
            <img src={require("../../../assets/illustrations/icon-box.png")} alt="error-404" className="w-100 mb-10" />
            <p className="text-primary text-center fw-bolder fs-2">Seems there is nothing here</p>
        </div>

    </div>
  );
}