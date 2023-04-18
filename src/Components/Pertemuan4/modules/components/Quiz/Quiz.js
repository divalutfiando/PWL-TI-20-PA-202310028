import React from 'react'

export default function Quiz(props) {
  return (
    
    <div className='d-flex d-flex-column flex-root ' style={{marginTop: '12rem'}}>
        <div className="d-flex d-flex-column d-flex-column-fluid"> 
        <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20"> </div>
            <h1 className='mb-12 text-white' style={{marginBottom: '7rem'}}>
                {props.title}
            </h1>
        
        <div className='w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto text-light' > 
            <h1>Saat ini sedang </h1>   {props.children}
        </div>
        </div>
    </div>
  )         
}
