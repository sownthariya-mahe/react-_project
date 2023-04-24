import React from "react";
import rcb from './rcb-img.png'
import csk from './csk-img.png'
import '../task2/cong.css'

export function Super(){
    return(
        <>
        <div>
            <div className="bgs p-4 m-4">
                <h3 className="text-center text-white fw-bold p-5 fs-3">Super Over Leaque</h3>
                <div className="d-flex justify-content-center ">
                    <div className="col-6">
                    <img src={rcb} className="col-sm-12 col-md-12 col-xs-12 col-12 col-lg-6"></img>
                    
                    
                    <img src={csk} className="col-sm-12  col-md-12 col-xs-12 col-12 col-lg-6"></img>
                   </div>
                </div>
            </div>
        </div>
        </>


    );

}