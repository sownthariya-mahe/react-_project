import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export  function Notification(){
    return(
        <>
        <div className="d-flex justify-content-center align-content-center ">
           
            <div className="col p-5  text-center ">
                 <p className="fs-1 ">Notification</p>
                <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12  ">
                    <p className="text-white bg-primary p-3 m-3"> <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon> &nbsp;  &nbsp;  Information message</p>
                    <p className="text-white  bg-success p-3 m-3"><FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon> &nbsp; &nbsp;  Success message</p>
                    <p className="text-white  bg-warning p-3 m-3"> <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>  &nbsp; &nbsp;Warning message</p>
                    <p className="text-white bg-danger p-3 m-3"><FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon> &nbsp; &nbsp;Error message</p>
                  
                </div>
            </div>
        </div>    
        </>
    );
}