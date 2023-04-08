import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import TableData from "../../modules/users/TableData";
import { FormUsers } from "../../modules/users/FormUsers";
import LoadingSpin from "../../../../../layouts/components/loadings/LoadingSpin";
import AlertInfo from "../../../../../layouts/components/alerts/AlertInfo";


export function UsersAcc() {

    //const [ product, setProduct ] = useState([]);
    const [ user, setUser ] = useState({
        loading: false,
        data:[],
        message:""
      });
    
      const getUser = () =>{
        setUser({...user, loading:true});
    
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://localhost:8080/api/usersacc',
          headers: { }
        };
    
        axios.request(config)
        .then((response) => {
          // console.log(JSON.stringify(response.data));
          //setProduct();
          setUser({...user, data:response.data.data, loading:false});
        })
        .catch((error) => {
          setUser({...user, loading:false, message:error.message});
        });    
      }
      useEffect (()=> {
        getUser();
      },[])
    return (
        <div id="user-master">
            <div style={{ marginTop: '2rem' }} className="row">
                <div className="col-sm-12 col-lg-8">
                    <div className="d-flex flex-wrap flex-stack pb-7">
                        <div className="d-flex flex-wrap align-items-center my-1">
                            <h3 className="fw-bolder me-5 my-1">{Object.values(user.data).length} items of product</h3>
                        </div>
                        <div className="d-flex flex-wrap my-1">
                            <div className="d-flex my-0">
                                <div className="input-group me-3">
                                    <input
                                        type="text"
                                        name="search"
                                        className="form-control"
                                        placeholder="Search here"
                                        autoComplete="off" />
                                    <span className="input-group-text">
                                        <i className="bi bi-search"></i>
                                    </span>
                                </div>
                                <select name="sort" className="form-select">
                                    <option value="">Sort by</option>
                                    <option value="">Name</option>
                                    <option value="">Price</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {(user.loading) ? <LoadingSpin /> : ""}
                    {(user.message) ? <AlertInfo message={user.message} variant={"danger"} /> : ""}
                    <div className="user-items ">
                        <TableData data={user.data} />
                    </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                    <FormUsers getUser={getUser} />
                </div>
            </div>
        </div>
    );
}
