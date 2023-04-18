import React, { useState } from 'react'
import Quiz from './Quiz'

export default function Widget1() {
       const [title, setTitle] = useState("ketik di sini");
    return (
        <Quiz title={title}  style={{marginTop: '5rem'}}>
            
            <form method='post' autoComplete='off' className='form w-100'>
                <div className="text-center mb-10">
                    <h1 className='text-dark mb-3'>Form</h1>
                        <div className="text-gray-400 fw-bold fs-5">
                            Masukan Dengan Benar </div>
                        </div>
                <div className="fv-row mb-10 fv-plugins-icon-container">
                    <label className="form-label fs-6 fw-bolder text-dark">Masukan Text</label>
                        <input type="text" name="title" className='form-control form-control-lg form-control-solid' defaultValue={title} onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className="text-center">
                    <button type='button' className='btn btn-lg btn-primary w-100 mb-5'>Submit</button>
                    </div>
            </form>
            
         </Quiz>

    )
}