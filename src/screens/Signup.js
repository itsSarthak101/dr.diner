import React from 'react';
import '../css/signup.css';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <section className="">
        <div className="container-fluid px-0">
            <div className="row g-0">
                <div className="col-lg-8 vh-100" id='signup_div'>
                    <div id='signup_box'>
                        <form>
                            <h2 style={{color: '#4d29a7'}}>Sign Up</h2>
                            <div className="mb-3">
                                <label>First name</label>
                                <input type="text" className="form-control" placeholder="First name"/>
                            </div>
                            <div className="mb-3">
                                <label>Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>
                            <div className="mb-3">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email"/>
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password"/>
                            </div>
                            <div className="d-grid">
                                <Link to="/login" type="submit" className="btn btn-primary" id='submit_btn'>Sign Up</Link>
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
