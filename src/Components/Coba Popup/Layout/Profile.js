import React from "react";

export default function Profile() {
  return (
    <div
      className="container-fluid bg-secondary"
      style={{
        marginLeft: "-30%",
        height: "50vh",
        width: "70vw",
        borderRadius: "12px 12px 30px 30px",
        marginTop: "80px",
      }}
    >
      <h4
        className="pb-4 pt-4 text-dark fw-bolder text-center "
        style={{ backgroundColor: "#C5DFF8", fontSize: "35px" }}
      >
        PROFILE
      </h4>

      <div
        className="row align-items-center"
        style={{ height: "25%", marginTop: "30px" }}
      >
        <label
          className="text-light"
          style={{ paddingLeft: "30px", fontSize: "27px" }}
        >
          Nama
        </label>
        <div
          className="col  text-light"
          style={{ paddingLeft: "40px", fontSize: "20px" }}
        >
          Fadlan Mulido
        </div>
      </div>
      <div
        className="row align-items-center"
        style={{ height: "25%", marginTop: "15px" }}
      >
        <label
          className="text-light"
          style={{ paddingLeft: "30px", fontSize: "27px" }}
        >
          Nomor Telepon
        </label>
        <div
          className="col text-light"
          style={{ paddingLeft: "40px", fontSize: "20px" }}
        >
          08381292738
        </div>
      </div>

      <button
        style={{
          marginLeft: "-30px",
          width: "7rem",
          marginTop: "35px",
        }}
        type="submit"
        className="btn btn-lg btn-secondary mx-2 btn-submit"
      >
        kemballi
      </button>
    </div>
  );
}
