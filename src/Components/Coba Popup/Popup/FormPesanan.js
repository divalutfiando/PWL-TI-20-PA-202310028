import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Navigate } from "react-router-dom";
import { openModal } from '../../Coba Popup/Layout/ModalPopUp';

export default function FromPesanan() {
    var today = new Date();
    const currDate = formatDate(today);
    const objProfile = {
        nama: '',
        nomer: "",
        birthdate: currDate
    }

    const [profile, setProfile] = useState(objProfile);
    const [successSubmit, setSuccseesSubmit] = useState(false);

    const handlerSubmit = (e) => {
        e.preventDefault();
        var formid = e.target.id;
        var target = document.getElementById(formid);
        var myButton = target.getElementsByClassName("btn-submit")[0];
        myButton.textContent = "Processing...";
        myButton.disabled = true;
        if (profile.nama && profile.nomer && profile.birthdate) {
            openModal({ header: "Information", message: <RenderMessage profile={profile} /> });
            setSuccseesSubmit(true);
        } else {
            openModal({ header: "Information", message: <p className="text-danger">Tolong isi kolong dengan benar !!</p> });
        }
        myButton.textContent = "Submit";
        myButton.disabled = false;
    }

    return (
        (successSubmit) ? <Navigate to="/isian" replace={true} /> : (
            <div style={{marginTop:'7rem'}} className='card '>
                <div className="card-header">
                    <h3 style={{justifyContent:'center'}} className="card-title align-items-start flex-column">
                        <span className="card-label fw-bolder text-dark">Formulir Data kunjung</span><br/>
                        <span className="text-gray-400 mt-1 fw-bold fs-6">Isilah kolom di bawah ini dengan benar!</span>
                    </h3>
                </div>
                <div className="card-body">
                    <form className='form-profile' method='post' onSubmit={(e) => handlerSubmit(e)} id="form-profile" >
                    <div className="fv-row mb-10 fv-plugins-icon-container">
                            <label className="required form-label fs-6 fw-bolder text-dark">Nama</label>
                            <input type="text" name="nama" required className='form-control form-control-lg form-control-solid' defaultValue={profile.nama} onChange={(e) => setProfile({ ...profile, nama: e.target.value })} />
                        </div>
                        <div className="fv-row mb-10 fv-plugins-icon-container">
                            <label className="required form-label fs-6 fw-bolder text-dark">Nomer Telepon</label>
                            <input type="text" name="nomer" required className='form-control form-control-lg form-control-solid' pattern="^[0-9]*$" defaultValue={profile.nomer} onChange={(e) => setProfile({ ...profile, nomer: e.target.value })} />
                        </div>
                        <div className="fv-row mb-10 fv-plugins-icon-container">
                            <label className="required form-label fs-6 fw-bolder text-dark">Pilih Tanggal Kunjung</label>
                            <DatePicker
                                selected={new Date(profile.birthdate)}
                                onChange={(value) => setProfile({ ...profile, birthdate: formatDate(value) })}
                                className="form-control form-control-lg form-control-solid"
                                dateFormat="yyyy-MM-dd"
                                placeholderText="Choose Date"
                            />
                        </div>

                        <div className="text-center">
                            <button style={{width:'7rem', backgroundColor:'green', marginTop:'10px'}} type="submit" className='btn btn-lg btn-primary mx-2 btn-submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    )
}

const formatDate = (datestring) => {
    const today = new Date(datestring);
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return yyyy + "-" + mm + "-" + dd;
}

// const calculateAge = (birthdate) => {
//     var today = new Date();
//     var birthDate = new Date(birthdate);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     return age;
// }

const RenderMessage = ({ profile }) => {
    return (
        <div className="profile">
            <p className="text-dark">Nama: {profile.nama}</p>
            <p className="text-dark">Nomer Telpon: {profile.nomer} </p>
            <p className="text-dark">Tanggal Kunjung: {profile.birthdate}</p>
            {/* <p className="text-dark">Age: {calculateAge(profile.birthdate)} years old</p> */}

            <button style={{width:'7rem', backgroundColor:'green', marginTop:'10px'}} type="submit" className='btn btn-s btn-primary mx-1 btn-submit'>Kirim Data</button>
        </div>
    )
}