import React from "react";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
export function Fakeapp() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(data1 => data1.json())
            .then(data2 => setData(data2))
    })
    return (
        <>
            <h1>Dress Collections</h1>
            {
                data.map((value, index) => (
                    <>
                        <div className="card d-inline-flex col-lg-2 m-2" >
                            <img src={value.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{value.title}</h5>
                                <p className="card-text">{value.category}</p>
                                <Link to={`/fake1/${value.id}`}><input type="button" value="view more" className=""/></Link>
                            </div>
                        </div>


                    </>
                ))
            }
        </>

    );


}