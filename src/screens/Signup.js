import React from 'react';
import '../css/signup.css';

export default function Signup() {
  return (
    <section className="">
        <div className="container-fluid px-0">
            <div className="row g-0">
                <div className="col-lg-8 vh-100" id='signup_div'>
                    <div id='signup_box'>
                        <form>
                            <h3>Sign Up</h3>
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
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </div>
                            <p className="forgot-password text-right">
                                Already registered <a href="/sign-in">sign in?</a>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4 vh-100 bg-primary">
                    <img src="assets/img/login/top-view-bowl-with-lentils-variety-condiments.jpg" style={{ width: '100%', height: '100%'}} alt="" />
                </div>
            </div>
        </div>
    </section>
  );
}
