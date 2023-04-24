import React from "react";
import heart from './heart.png'


export function Responcep2(){
    return(
        <>
        <div className="  p-5 bgr ">
            <div className="bg-white  container col-12 rounded-4">
                
                <div className="container col-12 ">
                   <div className="p-5  justify-content-center  d-flex">
                        <img src={heart} className = "  col-4 d-flex  "/>
                  
                    </div>
                    <h1 className="text-center fw-bold">Thank You!</h1>
                    <p className="text-center m-0  ">We will use your feedback to improve our customer support perfomance</p>

                    
                </div>

            </div>
        </div>

        </>
    );
}