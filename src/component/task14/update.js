import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function Update() {
    const { sno } = useParams();
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileno,setMobileno] = useState('');


useEffect(() => {
    fetch("http://localhost:8081/update/" + sno + "")
        .then(response =>response.json())
        .then(function(response){ 
        setFname(response[0].fname);
        setLname(response[0].lname);
        setGender(response[0].gender);
        setEmail(response[0].email);
        setPassword(response[0].password);
        setMobileno(response[0].mobileno);

       })
        
    .catch(function (error) {
        alert("catch error");
        window.location.href = "/table";

    })
},[])


const handlesubmit =async(event)=> {
    event.preventDefault();
    var datastring = new FormData(event.target);
    var config = { header: { "enctype": "multipart/form-data" } };

    await axios.put('http://localhost:8081/update/' + sno + '',{fname,lname,gender,mobileno,email,password} , config)
        .then(function (response) {
            if (response.data.status === 'error') {
                alert("error1");
                window.location.href = '/table';

            }
            else if (response.data.status === 'success') {
                alert("updated");
                window.location.href = '/table';

            }
        })
        .catch(function (err) {
            alert("catch error");
            window.location.href = '/table';
        });

}
return(
    <>
    <div className="container-fluid mt-5 pt-5 col-8 vh-100">
           <form onSubmit={handlesubmit}>
                            <label for="inputEmail4" className="form-label">First Name</label>
                            <input type="text" name="fname" className="form-control" id="fname" placeholder="Enter Your fname" value={fname} onChange={(e)=>setFname(e.target.value)}/>
                   
                            <label for="inputPassword4" className="form-label">lname</label>
                            <input type="text" name="lname" className="form-control" id="lname" placeholder="Enter Your lname" value={lname} onChange={(e)=>setLname(e.target.value)} />
        
                            <label for="inputEmail4" className="form-label">Gender</label>
                            <input type="text" name="gender" className="form-control" id="gender" placeholder="Enter Your Gender" value={gender} onChange={(e)=>setGender(e.target.value)} />
                
                            <label for="inputPassword4" className="form-label">Phone Number</label>
                            <input type="tel" name="mobileno" className="form-control" id="mobileno" placeholder="Enter Your PhoneNumber" value={mobileno} onChange={(e)=>setMobileno(e.target.value)} />
   
                            <label for="inputEmail4" className="form-label">E-Mail</label>
                            <input type="text" name="email" className="form-control" id="email" placeholder="Enter Your E-Mail" value={email} onChange={(e)=>setEmail(e.target.value)} />
              
                            <label for="inputPassword4" className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" id="password" placeholder="Enter Your Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    
                            <input type="submit" className="rounded-3 mt-2" value="update"/>
                     
            </form>
           </div>
    </>
)}