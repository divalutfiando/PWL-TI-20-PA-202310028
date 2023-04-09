import React, { useEffect } from "react";
import { Form } from "./Form";
import TableData from "./TableData";
import axios from "axios";
import { useState } from "react";
import LoadingSpin from "../../../../../layouts/components/loadings/LoadingSpin";
import AlertInfo from "../../../../../layouts/components/alerts/AlertInfo";

export function Products() {

  //const [ product, setProduct ] = useState([]);
  const [ product, setProduct ] = useState({
    loading: false,
    data:[],
    message:""
  });

  const getProduct = () =>{
    setProduct({...product, loading:true});

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/api/products',
      headers: { }
    };

    axios.request(config)
    .then((response) => {
      // console.log(JSON.stringify(response.data));
      //setProduct();
      setProduct({...product, data:response.data.data, loading:false});
    })
    .catch((error) => {
      setProduct({...product, loading:false, message:error.message});
    });    
  }
  useEffect (()=> {
    getProduct();
  },[])

  return (
    <div id="product-master" >
      <div style={{marginTop : '2rem'}} className="row">
        <div className="col-sm-12 col-lg-8" >
          <div className="d-flex flex-wrap flex-stack pb-7">
            <div className="d-flex flex-wrap align-items-center my-1">
              <h3 className="fw-bolder me-5 my-1">{Object.values(product.data).length} items of product</h3>
            </div>
            <div className="d-flex flex-wrap my-1">
              <div className="d-flex my-0">
                <div className="input-group me-3">
                  <input
                    type="text"
                    name="search"
                    className="form-control"
                    placeholder="Search here"
                    autoComplete="off"
                  />
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

          {(product.loading) ? <LoadingSpin /> : ""}
          {(product.message) ? <AlertInfo message={product.message} variant={"danger"} /> :"" }
          <div className="product-items ">
            <TableData data={product.data} />
          </div>
        </div>
        <div className="col-sm-12 col-lg-4">
          <Form getProduct={getProduct} />
        </div>
      </div>
    </div>
  );
}