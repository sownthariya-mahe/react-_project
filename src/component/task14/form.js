import axios from "axios";
import React from "react";

export function Form() {
    const handlesubmit = async (event) => {
        event.preventDefault();
        var dataString = new FormData(event.target);
        dataString.set('fname',dataString.get('fname'));
        dataString.set('lname',dataString.get('lname'));
        dataString.set('gender',dataString.get('gender'));
        dataString.set('mobileno',dataString.get('mobileno'));
        dataString.set('email',dataString.get('email'));
        dataString.set('password',dataString.get('password'));
        var config = { headers: { "enctype": "multipart/form-data" } };
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var gender = document.getElementById("gender").value;
        var mobileno = document.getElementById("mobileno").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        if (fname === '' || fname === 'null') {
            alert("enter first name")
        } else if (lname === '' || lname === 'null') {
            alert("enter lname")
        } else if (gender === '' || gender === 'null') {
            alert("enter gender")
        } else if (mobileno === '' || mobileno === 'null') {
            alert("enter phone number")
        } else if (email === '' || email === 'null') {
            alert("enter email")
        } else if (password === '' || password === 'null') {
            alert("enter phone number")
        } else {
            await axios.post("http://localhost:8081/add", {fname,lname,gender,mobileno,email,password}, config)
                .then(function (res) {
                    if (res.data.status === 'error') {
                        alert('error')
                        window.location.reload();
                    } else if (res.data.status === 'error') {
                        alert('success')
                        window.location.reload();
                    }
                })
        }
    }

    return (
        <>
           <div className="container-fluid mt-5 pt-5 col-8 vh-100">
           <form onSubmit={handlesubmit}>
                            <label for="inputEmail4" className="form-label">First Name</label>
                            <input type="text" name="fname" className="form-control" id="fname" placeholder="Enter Your fname" />
                   
                            <label for="inputPassword4" className="form-label">lname</label>
                            <input type="text" name="lname" className="form-control" id="lname" placeholder="Enter Your lname" />
        
                            <label for="inputEmail4" className="form-label">Gender</label>
                            <input type="text" name="gender" className="form-control" id="gender" placeholder="Enter Your Gender" />
                
                            <label for="inputPassword4" className="form-label">Phone Number</label>
                            <input type="tel" name="mobileno" className="form-control" id="mobileno" placeholder="Enter Your PhoneNumber" />
   
                            <label for="inputEmail4" className="form-label">E-Mail</label>
                            <input type="text" name="email" className="form-control" id="email" placeholder="Enter Your E-Mail" />
              
                            <label for="inputPassword4" className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" id="password" placeholder="Enter Your Password" />
                    
                            <input type="submit" className="rounded-3 mt-2" value="submit"/>
                     
            </form>
           </div>
        </>
    );
}