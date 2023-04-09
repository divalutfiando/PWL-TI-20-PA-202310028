import React, { useState } from "react";
import axios from "axios";
import { openModal } from "../../../../../layouts/components/modals/ModalPopUp";
import PackageJSON from "../../../../../../../../package.json";

export function Form(props) {
  const [postData, setPostData] = useState({
    name: "",
    description: "",
    stock: 0,
    price: "",
    is_active: 1,
  });

  const submitForm = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      url: PackageJSON.system_param.hostAPI + "api/products",
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
    <div className="card ">
      <div className="card-header border-0 py-3">
        <div className="card-title d-flex flex-column">
          <h3 className="text-light">Form Product</h3>
          <p className="text-light fs-7">
            Please fill up the form with correctly
          </p>
        </div>
      </div>
      <div className="card-body pt-0">
        <form
          method="post"
          autoComplete="off"
          id="form-product"
          onSubmit={(e) => submitForm(e)}
        >
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              defaultValue={postData.name}
              onChange={(e) =>
                setPostData({ ...postData, name: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="desc"
              className="form-control"
              defaultValue={postData.description}
              onChange={(e) =>
                setPostData({ ...postData, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <div className="mb-3">
                <label className="form-label">Stock</label>
                <input
                  type="number"
                  name="name"
                  className="form-control"
                  defaultValue={postData.stock}
                  onChange={(e) =>
                    setPostData({ ...postData, stock: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-sm-12 col-lg-9">
              <div className="mb-3">
                <label className="form-label">Price</label>
                <div className="input-group">
                  <span className="input-group-text">Rp</span>
                  <input
                    type="text"
                    name="price"
                    className="form-control"
                    defaultValue={postData.price}
                    onChange={(e) =>
                      setPostData({ ...postData, price: e.target.value })
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