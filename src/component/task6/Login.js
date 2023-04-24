import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import icon from './icon.jpg';
export function Login(){
    return(
        <>
        <div className="bgl p-5 m-5">
            <div>
                <div className="container-fluid bg-white rounded-5 p-5 m-3">
                    <div className="row cax">
                        <div className="col-12 col-sm-12 col-md-12  col-lg-4 col-xl-4">
                        <img src={icon}className="img-fluid rounded-circle " alt="..."/>
                        </div>
                        <div className="col-12  col-sm-12 col-md-12 col-lg-8 col-xl-8">
                        <form>
                          <h4 className="fw-bold text-center">Member Login</h4>
                          <div className="col-sm-6"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon><input type="email" className=" p-3 m-3 rounded-5 border border-0 out" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder="Email"/>  </div>             
                          <div className="col-sm-6"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon><input type="password" className=" p-3 m-3 rounded-5 border border-0 out" id="exampleInputPassword1" placeholder="*********"/></div>
                          <button type="button" className="btn bgb p-3 m-3 w-100 rounded-5">LOGIN</button>
                          <p className="text-center">Forget <a href="" className="tc">Username/Password</a> <br/>
                          <button className="border border-0 tc fs-2 bg-white">Create your account <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button></p>
                        </form>
                        </div>

                    </div>

                </div>
                
            </div>
        </div>


        </>
    );
}