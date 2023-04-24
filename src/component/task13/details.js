import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export function Details() {
    const {id}=useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/"+id)
            .then(data1 => data1.json())
            .then(data2 => setData(data2))
    });
    return (
      
                    <>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={data.image} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{data.title}</h5>
                                        <p class="card-text">{data.title}</p>
                                        <p class="card-text">{data.price}</p>
                                        <p class="card-text">{data.description}</p>
                                        <p class="card-text">{data.category}</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </>
                
            
        

    );


}