import React from "react";

import pro from '../task2/card1.png'
import watch from '../task2/watch.png'

 import {Link} from 'react-router-dom'
export function Congrats(){
    return(
    
        <div className="bg " >
            <div className="p-5">
                <h2 className="text-center">Conguratulation</h2>
                <div className="bg-c container-fluid  text-center  p-4 ">
                     <div className=""><img src ={pro} alt="noimage" className=" "/></div>
                    <div><h3 className="text-center">Kiran V</h3><br></br>
                    <p className="text-center">Vishnu Institute of computer Education and Technology,Bhivarman</p></div>
                    <div className="  "><img src={watch} alt="noimage"className=" "/></div>

                </div>
            </div>
        </div>    
        

    );
}