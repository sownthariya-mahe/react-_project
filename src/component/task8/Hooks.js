import React,{useState} from "react";

export function Hooks(){
    const [a,setA]=useState(0);
    function inc(){

        setA(a+1)
        
    }
    function dec(){
        setA(a-1)
    }
    function reset(){
        setA(a*0)

    }

    return(
            <>  
            <div className=" bg-secondary rounded-5 w-50 h-50 position-absolute top-50 start-50 translate-middle text-center p-5">
                <h1>{a}</h1>
                <input type = "button" value = "increse" onClick={inc}/>&nbsp;
                <input type = "button" value = "decrease" onClick={dec}/>&nbsp;
                <input type = "button" value = "reset" onClick={reset}/>
            </div>    
            </>
    );
} 