import React, { useState } from "react";
import {Button, Modal} from 'react-bootstrap';

const TableUsers = ({data}) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);
  const user = data
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modal = (value) => {
    setId(value)
    setShow(true)
  }
  
  return (
    <div style={{ marginTop : '-1rem' }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Fullname</th>
            <th scope="col">NPM</th>
            <th scope="col">Program</th>
            <th scope="col">Program Study</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          
          {
            (Object.values(data).length > 0) ? (
            data.map((e, index) => (
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{e.firstname} {e.middlename} {e.lastname}</td>
                <td>{e.npm}</td>
                <td>{e.programs.description}</td>
                <td>{e.programStudy.name}</td>
                <td><button type="button" class="btn btn-primary btn-sm" onClick={()=>modal(e.id)}>Detail</button></td>     
              </tr>
            ))
            ) : (
              <tr >
                <td colSpan="6" className="text-dark text-center">No record Found</td>
              </tr>
            )
          }
          
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detail User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            user.filter(u => u.id === id).map((u,index) => (
              <div className="container">
                <div className="row">
                  <div className="col-4 fw-bold">
                    Fullname
                  </div>
                  <div className="col-1">
                    :
                  </div>
                  <div className="col">
                    {u.firstname} {u.middlename} {u.lastname}
                  </div>
                </div>

                <div className="row">
                  <div className="col-4 fw-bold">
                    NPM
                  </div>
                  <div className="col-1">
                    :
                  </div>
                  <div className="col">
                    {u.npm}
                  </div>
                </div>

                <div className="row">
                  <div className="col-4 fw-bold">
                    Email
                  </div>
                  <div className="col-1">
                    :
                  </div>
                  <div className="col">
                    {u.email}
                  </div>
                </div>

                <div className="row">
                  <div className="col-4 fw-bold">
                    Birthdate
                  </div>
                  <div className="col-1">
                    :
                  </div>
                  <div className="col">
                    {u.birthdate}
                  </div>
                </div>

                <div className="row">
                  <div className="col-4 fw-bold">
                    Program
                  </div>
                  <div className="col-1">
                    :
                  </div>
                  <div className="col">
                    {u.programs.description}
                  </div>
                </div>

                <div className="row">
                  <div className="col-4 fw-bold">
                    Program Study
                  </div>
                  <div className="col-1">
                    :
                  </div>
                  <div className="col">
                    {u.programStudy.name}
                  </div>
                </div>
              </div>
            ))
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TableUsers;