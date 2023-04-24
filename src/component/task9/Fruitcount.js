import React,{useState} from "react";
import mango from './man.png';
import banana from './ban.png';


export function Fruitcount(){
    const [mango1,setMango]=useState(0)
    const [banana1,setBanana]=useState(0)
    return (
            <>

<div className="container-fluid fruit-bg py-5 bg-warning">
            <div className="col-lg-10 col-12  rounded-5 mx-auto text-center row bg-white p-5">
                <h1 className="my-5">Bob ate <span className="text-warning"> {mango1}</span> mangoes <span className="text-warning">{banana1}</span>  bananas</h1>
                <div className="col-lg-6 pt-lg-5 col-12 col-sm-12">
                    <img src={mango} className="img-fluid h-50" alt=""/><br/><br/>
                    <button type="button" class="btn btn-primary" onClick={()=>setMango(mango1+1)}>Eat Mango</button>
                </div>
                <div className="col-lg-6 pt-lg-5 col-12 col-sm-12 ">
                    <img src={banana} className="img-fluid h-50" alt=""/><br/><br/>
                    <button type="button" class="btn btn-primary" onClick={()=>setBanana(banana1+1)}>Eat Banana</button>
                </div>
            </div>
        </div>

            </>
    );
}
