import React, { useState } from "react";
import { openModal } from "../../../../../layouts/components/modals/ModalPopUp";
import axios from "axios";
import "./tbuser.css"

export default function FormUsers (props) {
  const [postData, setPostData] = useState({
    npm: "",
    firstname: "",
    middlename: "",
    lastname: "",
    programs: { id: 1 },
    programStudy: { id: 2 },
    email: "",
    birthdate: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:8080/api/students", postData).then((res) => {
        let results = res.data;
        console.log(results);
        if (results) {
          openModal({ header: "Info", message: "Successfully submited" });
          props.getUser();
        } else {
          openModal({ header: "Error", message: "Failed submit" });
        }
      });
    } catch (error) {
      openModal({ header: "Error", message: error.error });
    }
  };

  return (
    <form
      method="post"
      autoComplete="off"
      id="form-product"
      onSubmit={(e) => submitForm(e)}
       
    >
      <div className="mb-3">
        <label className="form-label">NPM</label>
        <input
          type="text"
          name="npm"
          className="form-control"
          defaultValue={postData.npm}
          onChange={(e) => setPostData({ ...postData, npm: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Firstname</label>
        <input
          type="text"
          name="firstname"
          className="form-control"
          defaultValue={postData.firstname}
          onChange={(e) =>
            setPostData({ ...postData, firstname: e.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Middlename</label>
        <input
          type="text"
          name="middlename"
          className="form-control"
          defaultValue={postData.middlename}
          onChange={(e) =>
            setPostData({ ...postData, middlename: e.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Lastname</label>
        <input
          type="text"
          name="lastname"
          className="form-control"
          defaultValue={postData.lastname}
          onChange={(e) =>
            setPostData({ ...postData, lastname: e.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Birthdate</label>
        <input
          type="text"
          name="birthdate"
          className="form-control"
          defaultValue={postData.birthdate}
          placeholder="YYYY-MM-DD"
          onChange={(e) =>
            setPostData({ ...postData, birthdate: e.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          defaultValue={postData.email}
          onChange={(e) => setPostData({ ...postData, email: e.target.value })}
        />
      </div>

      <div className="text-end mt-3 " >
        <button className="btn bg-danger text-light" style={{marginRight: '5px'}} type="button">
          Cancel
        </button>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}