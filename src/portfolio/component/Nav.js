 import React from "react"
 import {Link} from "react-router-dom";
 export function Nav(){
    return(
        <>
        <nav className ="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid bg-dark">
    <a class="navbar-brand text-white">SK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className=" collapse navbar-collapse " id="navbarNav">
        <div className="text-white">
      <ul class="navbar-nav  ">
      
        <li className="nav-item">
          <Link to = '/'className="nav-link text-white " aria-current="page" >Home</Link>
        </li>
        <li class="nav-item">
          <Link to ='/about' className="nav-link text-white" >About</Link>
        </li>
        <li class="nav-item">
          <Link to ='/education' className="nav-link text-white"  >Education</Link>
        </li>
        <li class="nav-item">
          <Link to = '/myproject' className="nav-link text-white"  >My project</Link>
        </li>
        <li class="nav-item">
          <Link to ="/contact" className="nav-link text-white" >Contact</Link>
        </li>
        <li class="nav-item">
          <Link to ='/certificate' className="nav-link text-white" > Certificate </Link>
        </li>
      
      </ul>
        </div>
    </div>
  </div>
</nav>
        </>
    );


}