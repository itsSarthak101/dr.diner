import React from 'react';
import '../css/login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <section className="">
        <div className="container-fluid px-0">
            <div className="row g-0">
                <div className="col-lg-8 vh-100" id="login_div">
                    <div id="login_box">
                        <form>
                            <h2 style={{color: '#4d29a7'}}>Sign In</h2>
                            <div className="mb-3">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email"/>
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password"/>
                            </div>
                            <div className="mb-3">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>
                            <div className="d-grid">
                                <Link type="submit" className="btn" id='submit_btn' to="/main">Submit</Link>
                            </div>
                            <p className="forgot-password text-right"><Link to="/" style={{textDecoration: 'none'}}>Forgot password?</Link></p>
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
