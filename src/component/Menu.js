import React from "react";
import { Link } from "react-router-dom";
export function Menu(){
    return( 
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" >MoodleAs</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-white" id="navbarNav">
        <ul className="navbar-nav">
        <li class="nav-item">
          <Link to ='/datenav' className="nav-link text-dark" > datenav </Link>
        </li>
        <li class="nav-item">
          <Link to ='/calendar' className="nav-link text-dark" > calendar</Link>
        </li>
        <li class="nav-item">
          <Link to ='/datenav2' className="nav-link text-dark" > datenav2 </Link>
        </li>
        
        
        <li className="nav-item">
          <Link to  ='/'  className="nav-link active" aria-current="page" >Hello</Link>
        </li>
        <li className="nav-item">
          <Link to  ='/boots' className="nav-link" >Boots</Link>
        </li>
        <li className="nav-item">
          <Link to ='/congrats'  className="nav-link" >Congrats</Link>
        </li>
        <li className="nav-item">
          <Link to ='/super'  className="nav-link" >Super</Link>
        </li>
        <li className="nav-item">
          <Link to ='/Social'  className="nav-link" >Socialbutton</Link>
        </li>
        <li className="nav-item">
          <Link to ='/notification'  className="nav-link" >Notification</Link>
        </li>
        <li className="nav-item">
          <Link to ='/login'  className="nav-link" >Login</Link>
        </li>
        <li className="nav-item">
          <Link to ='/technology'  className="nav-link" >Technologies</Link>
        </li>
        <li className="nav-item">
          <Link to ='/hooks'  className="nav-link" >Hooks</Link>
        </li>
        <li className="nav-item">
          <Link to ='/fruitcount'  className="nav-link" >fruitcount</Link>
        </li>
        <li className="nav-item">
          <Link to ='/responce1' className="nav-link" >Responcive</Link>
        </li>
        <li className="nav-item">
          <Link to ='/date' className="nav-link" >Date</Link>
        </li>
        <li className="nav-item">
          <Link to ='/json' className="nav-link" >Json</Link>
        </li>
        <li className="nav-item">
          <Link to ='/fake' className="nav-link" >Fakeapp</Link>
        </li>
        <li className="nav-item">
          <Link to ='/table' className="nav-link" >table</Link>
        </li>
        <li className="nav-item">
          <Link to ='/form' className="nav-link" >Form</Link>
        </li>
        <li className="nav-item">
          <Link to ='/update' className="nav-link" >Updateform</Link>
        </li>
        </ul>
       </div>
      </div>
      </nav>
 </>
 );
 }   
    
        

