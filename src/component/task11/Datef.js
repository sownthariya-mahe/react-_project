import React,{useState} from "react";

export function Datef(){
    const[show,setShow]=useState("")
    function datecal(){
        var date1 = document.getElementById("cdate").value
        alert(date1)
        var date2 = new Date(date1)
        date2.setDate(date2.getDate()+90)
        var currentd = date2.getDate()+ ":" + (date2.getMonth()+1) + ":" + date2.getFullYear()
        setShow(currentd)
    }
    return(
        <>
        <div className=" bg-warning w-50 h-50 position-absolute top-50 start-50 translate-middle text-center p-5">
        <lable>Course Start Date:</lable> <input type="date" id = "cdate" /><br/>
        <input  type="button" className="" onClick={datecal}value ="submit"/><br/>
        <lable>Course Complition Date:</lable> <h3>{show}</h3>
        </div>
        </>
    );
} 