
import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import "./task.css"
import { Link } from "react-router-dom";

 export function Table(){

        const[tabledata,settabledata]=useState([])
        useEffect(()=>{
            axios.get('http://localhost:8081/alldetails')
            .then((result)=>
            {
                console.log(result);
                settabledata(result.data);
            });
        },[])
        const deleteuser = (sno)=>{
            var datastring = {sno:sno};
            var config ={headers:{"enctype":"multipart/form-data"}};
            axios.post('http://localhost:8081/deleteuser',datastring,config)
            .then(function(res){
                if(res.data.status === 'error'){
                    alert("error");
                    window.location.reload()
                }
                else if(res.data.status === "success"){
                    alert("success");
                    window.location.reload()
                }
        })
        .catch(function(error){
            alert("catch error");
            window.location.reload()
        })
        }
    
    return(
        <>
        <div className="b vh-100 ">

            <table className="  tb">
                <tr className="tb">
                <th className="tb">Sno</th>    
                <th className="tb">FirstName</th>
                <th className="tb">LastName</th>
                
                {/* <th className="tb">updatedDate</th> */}
                <th className="tb">Email</th>
                <th className="tb">Password</th>
                <th className="tb">Gender</th>
                <th className="tb">Edit</th>
                <th className="tb">Button</th>

                
            
                </tr>
                <tbody>
                    {tabledata.map((value,index)=>(

                        <tr>
                            <td className="tb">{value.sno}</td>
                            <td className="tb">{value.fname}</td>
                            <td className="tb">{value.lname}</td>
                            <td className="tb">{value.gender}</td>
                            {/* <td className="tb">{value.updated_date}</td> */}
                            <td className="tb">{value.password}</td>
                            <td className="tb">{value.email}</td>
                           <Link to ={"/update/"+value.sno }> <td><input type="button" className="bg-warning" value="Edit"/></td></Link>
                            <td><input type="button" className="bg-danger" onClick={()=>{deleteuser(value.sno)}} value="Delete"/></td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        </div>
        </>
    );
 }