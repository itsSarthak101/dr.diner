import React, { useState } from 'react';
import '../css/signup.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
    const [credentials, setcredentials] = useState({firstname: "", lastname: "", email: "", password: "", geolocation: ""})
    let navigate = useNavigate()
    // Submit Handler
    const handleSubmit = async(e)=> {
        e.preventDefault();
        console.log(JSON.stringify({first_name: credentials.firstname, last_name: credentials.lastname, email: credentials.email, password: credentials.password}));
        const response = await fetch("http://localhost:5000/users/signup", {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify( {first_name: credentials.firstname, last_name: credentials.lastname, email: credentials.email, password: credentials.password} )
        });

        const json = await response.json()
        console.log(json)
        if(!json.success) {
            alert("Enter Valid Credentials")
        }
        if(json.success) {
            alert("User is created successfully!")
            navigate("/login");
        }
    } 

    const onChange = (event)=> {
        setcredentials( {...credentials, [event.target.name]: event.target.value} )
    }

  return (
    <section className="">
        <div className="container-fluid px-0">
            <div className="row g-0">
                <div className="col-lg-8 vh-100" id='signup_div'>
                    <div id='signup_box'>
                        <form onSubmit={handleSubmit}>
                            <h2 style={{color: '#4d29a7'}}>Sign Up</h2>
                            <div className="mb-3">
                                <label htmlFor="firstname">First name</label>
                                <input type="text" className="form-control" placeholder="First name" name="firstname" value={credentials.firstname} onChange={onChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastname">Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" name="lastname" value={credentials.lastname} onChange={onChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" name="email" value={credentials.email} onChange={onChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" name="password" value={credentials.password} onChange={onChange}/>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary" id='submit_btn'>Sign Up</button>
                            </div>
                            <p className="forgot-password text-right">
                                Already registered <Link to="/login">sign in?</Link>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4 vh-100" id='image_div'>
                    <div>
                        <img src="assets/img/logo/logo_abstract.png" id='img_main' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
