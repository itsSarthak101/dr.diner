import React from 'react';
import '../css/login.css';

export default function Login() {
  return (
    <section className="">
        <div className="container-fluid px-0">
            <div className="row g-0">
                <div className="col-lg-7 vh-100 bg-secondary" id="login_div">
                    <div id="login_box">
                        <form>
                            <h3>Sign In</h3>
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
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            <p className="forgot-password text-right">Forgot <a href="#">password?</a></p>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5 vh-100 bg-primary">
                    <img src="assets/img/login/top-view-bowl-with-lentils-variety-condiments.jpg" style={{ width: '100%', height: '100%'}} alt="" />
                </div>
            </div>
        </div>
    </section>
  );
}
