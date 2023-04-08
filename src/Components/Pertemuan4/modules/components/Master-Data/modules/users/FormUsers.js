import React, { useState } from "react";
import axios from "axios";

import { openModal } from "../../../../../layouts/components/modals/ModalPopUp";
import PackageJSON from "../../../../../../../../package.json";

export function FormUsers(props) {
  const [postData, setPostData] = useState({
    Username: "",
    Email: "",
    Alamat: "",
    Nomer : 0,
    is_active: 1,
  });

  const submitForm = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      url: PackageJSON.system_param.hostAPI + "api/usersacc",
      headers: { "Content-Type": "application/json" },
      data: postData,
    };

    axios.request(config)
      .then((response) => {
        let results = response.data.data;
        if (results) {
          openModal({ header: "Info", message: "Successfully submited" });
          props.getProduct();
        } else {
          openModal({ header: "Error", message: "Failed submit" });
        }
      })
      .catch((error) => {
        openModal({ header: "Error", message:error.message });
      });
  };

  return (
    <div className="card bg-white">
      <div className="card-header border-0 py-3">
        <div className="card-title d-flex flex-column">
          <h3 className="text-dark">Form User</h3>
          <p className="text-muted fs-7">
            Please fill up the form with correctly
          </p>
        </div>
      </div>
      <div className="card-body pt-0">
        <form
          method="post"
          autoComplete="off"
          id="form-users"
          onSubmit={(e) => submitForm(e)}
        >
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="name"
              className="form-control"
              defaultValue={postData.Username}
              onChange={(e) =>
                setPostData({ ...postData, Username: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Alamat</label>
            <textarea
              name="desc"
              className="form-control"
              defaultValue={postData.Alamat}
              onChange={(e) =>
                setPostData({ ...postData, Alamat: e.target.value })
              }
            ></textarea>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <div className="mb-3">
                <label className="form-label">Nomer</label>
                <input
                  type="number"
                  name="name"
                  className="form-control"
                  defaultValue={postData.Nomer}
                  onChange={(e) =>
                    setPostData({ ...postData, Nomer: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-sm-12 col-lg-9">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <div className="input-group">
                  <span className="input-group-text">Rp</span>
                  <input
                    type="text"
                    name="price"
                    className="form-control"
                    defaultValue={postData.Email}
                    onChange={(e) =>
                      setPostData({ ...postData, Email: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-end mt-3">
            <button className="btn btn-light" type="button">
              Cancel
            </button>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}