import React, { useState } from 'react';
import '../css/login.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [credentials, setcredentials] = useState({email: "", password: ""})
    let navigate = useNavigate()
    // Submit Handler
    const handleSubmit = async(e)=> {
        e.preventDefault();
        console.log(JSON.stringify({email: credentials.email, password: credentials.password}));
        const response = await fetch("http://localhost:5000/users/login", {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify( {email: credentials.email, password: credentials.password} )
        });

        const json = await response.json()
        console.log(json)
        if(!json.success) {
            alert("Enter Valid Credentials")
        }
        if(json.success) {
            navigate("/main");
        }
    } 

    const onChange = (event)=> {
        setcredentials( {...credentials, [event.target.name]: event.target.value} )
    }

    return (
    <section className="">
        <div className="container-fluid px-0">
            <div className="row g-0">
                <div className="col-lg-8 vh-100" id="login_div">
                    <div id="login_box">
                        <form onSubmit={handleSubmit}>
                            <h2 style={{color: '#4d29a7'}}>Sign In</h2>
                            <div className="mb-3">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" name="email" value={credentials.email} onChange={onChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" name="password" value={credentials.password} onChange={onChange}/>
                            </div>
                            <div className="mb-3">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn" id='submit_btn'>Submit</button>
                            </div>
                            <p className="forgot-password text-right"><Link to="/signup" style={{textDecoration: 'none'}}>I'm new to Dr.Diner</Link></p>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4 vh-100 bg-primary" id='image_div'>
                    <div>
                        <img src="assets/img/logo/logo_abstract.png" id='img_main' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
