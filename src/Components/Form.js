import React, { useState } from 'react'
import DatePicker from "react-datepicker"
import './Form.css';

import "react-datepicker/dist/react-datepicker.css"; 

export default function Form() {

  // const today = new Date().getFullYear();
  const initialDate = new Date().getFullYear();
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [npm, setNpm] = useState('')
  const [date, setDate] = useState(initialDate);
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');
  const [message3, setMessage3] = useState('');

  var age = new Date().getFullYear() - new Date(date).getFullYear();
  // console.log(age);

  const handleInput = (event) => {
    event.preventDefault();

    setMessage(`NPM : ${npm}`);
    setMessage2(`Name : ${firstName} ${middleName} ${lastName}`);
    setMessage3(`Age : ${age}th`);
    setFirstName('');
    setMiddleName('');
    setLastName('');
    setDate('');
  }

  return (
    <div className='container'>
      <div className='col-sm-12'>
        <h1 class='jdl'>FORM PENGISIAN DAFTAR MAHASISWA 2023</h1>
      </div>

      <div className='row g-5 mt-5'>
        <form onSubmit={handleInput}>
          <div className="row g-3">
          <div className="col-sm-12">
              <label for="npm" className="form-label">NPM</label>
              <input type="number" className="form-control isi" id="npm" value={npm} placeholder=""
                onInput={(event) => {
                  event.target.value = Math.max(0, parseInt(event.target.value)).toString().slice(0, 10)
                }}
                min={0}
                onChange={(event) => setNpm(event.target.value)}
                maxLength={10}
                required />
            </div>

            <div className="col-sm-12">
              <label for="firstName" className="form-label">First name</label>
              <input type="text" className="form-control isi" id="firstName" value={firstName} placeholder=""
                onChange={(event) => setFirstName(event.target.value)}
                required />
                
            </div>

            <div className="col-sm-12">
              <label for="middleName" className="form-label">Middle name</label>
              <input type="text" className="form-control isi"   id="middleName" value={middleName} placeholder=""
                onChange={(event) => setMiddleName(event.target.value)}
              />
            </div>

            <div className="col-sm-12">
              <label for="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control isi" id="lastName" value={lastName} placeholder=""
                onChange={(event) => setLastName(event.target.value)}
                required />
            </div>

            <div class="col-md-6">
            
                <label for="address" className="form-label">Birthdate</label>
                <DatePicker
                  className="form-control isi"
                  selected={date}
                  placeholderText='Enter Birthdate'
                  dateFormat="yyyy-MM-dd"
                  required={true}
                  onChange={(date) => {setDate(date)}}
                      />
            
            </div>
            <div class='col-md-4'>
            {/* <button className="w-100 btn btn-primary btn-lg" type="submit">Submit</button> */}
            <button type="submit" className="btn btn-danger bua" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Submit
            </button>
          </div>
          

          </div>

        </form>
        
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {message}
                <br />
                {message2}
                <br />
                {message3}
              </div>
              <div className="modal-footer ">
                
                {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button> */}
              </div>
            </div>
          </div>
        </div>
        {/* <h1>test{message}</h1> */}
      </div>

    </div>
  )
}