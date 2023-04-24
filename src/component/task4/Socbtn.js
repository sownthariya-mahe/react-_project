import React from "react";
export function Socbtn(){
    return(
    <>
       <div className="d-flex justify-content-center  align-items-center bgso col-lg-12 col-sm-12 col-md-12 col-12">
            <div className="col-lg-12 col-sm-12 col-md-12 col-12">
                <p className="fs d-flex justify-content-center text-white fs-1 ">Social Buttons</p>
                <div className="d-flex justify-content-center"> 
                <button type="button "className="btn btn-warning">Like</button>
                <button type="button" className="btn btn-light ms-3">Commend</button>
                <button type="button" className="btn btn-primary ms-3">Share</button></div>
            </div>
        </div>   
     </>   
    );

}