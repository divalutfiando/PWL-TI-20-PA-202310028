import React from "react";
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div className="d-flex flex-center flex-colum flex-colum-fluid p-10 pb-lg-20">
        <Link to={"/"} className="mb-12">
          <img src="https://www.ibik.acid/wp-content/uploads/2023/03/logo-ibik-web.png" alt="logo-ibik" className='h-40px' />
        </Link>
        <div className="w-lg-500px rounded shadow-sm p-10 p-lg mx-auto" style={{backgroundColor:"#8000808"}}>
          <form method="post" className='form w-100 fv-plugins-bootstrap5 fv-plugins'/>
        </div>
    </div>
  );
}