import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./json.css"



export function Jsonproject() {
    const [dress, setDress] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/dress.json")
            .then(data1 => data1.json())
            .then(data2 => setDress(data2))
    })
    return (
        <>
            <h1>Dress Collections</h1>
            {
                dress.map((value, index) => (
                    <>
                    <div className="col-3 m-3  wcard d-inline-flex ">
    
                        <div class="card" >
                            <img src={value.image} class="card-img-top col-8 imagsize" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{value.name}</h5>
                                <p class="card-text">{value.description}</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">{value.category}</li>
                                <li class="list-group-item">Rating: {value.rating}</li>
                                <li class="list-group-item">Price: <FontAwesomeIcon icon={faIndianRupeeSign}></FontAwesomeIcon> &nbsp;{value.price}</li>
                                <li class="list-group-item">  <input type="button " value="view more" className="text-center rounded-4 bg-primary"/></li>
                            </ul>
                            
                        </div>
                    </div>    

                    </>
                ))
            }
        </>

    );


}