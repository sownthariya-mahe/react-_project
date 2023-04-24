import React from "react";
import emoji1 from './emoji1.png'
import emoji2 from './emoji2.png'
import emoji3 from './emoji3.png'
import { Link } from "react-router-dom";


export function Responcep1(){
    return(
        <>

            <div className="  p-5 bgr ">
            <div className="bg-white  container col-12 rounded-4">
                
                <div className="container col-12 ">
                <p className="text-center fs-1 fw-bold ">How satisfied are you with our customer support perfomance?</p>
                   <div className="p-5 col-12 justify-content-center  d-flex">
                        <div className = "text-center "> 
                        <Link to = "/respon" ><img src={emoji1}  className = "col-12 p-5 d-flex"     /></Link>
                        <p>sad</p>
                        </div>
                        <div className = "text-center"> 
                        <Link to = "/respon" ><img src={emoji2} className = "col-12 p-5 d-flex"  /></Link>
                        <p>good</p>
                        </div>
                        <div className = "text-center"> 
                        <Link to = "/respon" ><img src={emoji3} className = "col-12 p-5 d-flex"  /></Link>
                        <p>happy</p>
                        </div>
                       
                  
                    </div>
                </div>

            </div>
        </div>
       

        </>
    );
}