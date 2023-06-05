/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './Bnr.css'

export default function Banner() {
    return (
      
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://www.liputanaceh.net/wp-content/uploads/2015/09/Harga-Komuditas-Sayuran-Pasca-Lebaran-050814-ADB-2.jpg"class="d-block ft"/>
                </div>
                <div class="carousel-item ">
                    <img src="https://cdn.medcom.id/images/content/2015/07/13/146902/nz5vxwJgbV.jpg" class="d-block ftt "/>
                </div>
                     
            </div>
 
                <div class="judulmid">
                    <h1>E-Pasar Kota Bogor</h1>
                    <p>Dinas Koperasi UMKM Perdagangan dan 
                       Perindustrian Kota Bogor</p>
                </div> 

                <div class="bglg">
                    <img src="https://1.bp.blogspot.com/-I2WFbLtjPEQ/YFbvhmdgseI/AAAAAAAACDU/hlYdXfczaQ0NBqtiKIbscdQSgNOKukfkACNcBGAsYHQ/s2048/Kota%2BBogor.png" class="lga"/>
                </div>             

                <div class="bglg2">
                    <img src="https://1.bp.blogspot.com/-I2WFbLtjPEQ/YFbvhmdgseI/AAAAAAAACDU/hlYdXfczaQ0NBqtiKIbscdQSgNOKukfkACNcBGAsYHQ/s2048/Kota%2BBogor.png" class="lga2"/>
                </div>
        </div>
  )
}
  