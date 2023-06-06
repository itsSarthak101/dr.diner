import '../css/about.css';
import Footer from '../components/Footer'
import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div>
            {/* Heading */}
            <div className="about-section text-center mt-2">
                <img  className='mb-1' src='assets/img/logo/logo_12.png' style={{width: "240px", height: "100px"}} />
                <h2>Who we are and what we did</h2>
            </div>
            <hr></hr>

            {/* About Cards */}
            <div className='container'>
                <div className="card-deck row mt-5 d-flex text-center">
                    {/* Cards */}
                    <div className="about_card card m-3 p-0 col-lg" style={{ width: "100%" }}>
                        <img className="card-img-top" src="assets/img/about/sarthak.jpg" alt="Card image" style={{ height: "300px", objectFit: "fill" }} />
                        <div className="card-body">
                            <h4 className="card-title">Sarthak</h4>
                            <p className="card-text">Front-end and Back-end</p>
                            <Link to="mailto:sarthak1395.be20@chitkara.edu.in?subject = Feedback&body = Message" className="btn contact_btn">Contact</Link>
                        </div>
                    </div>
                    <div className="about_card card m-3 p-0 col-lg" style={{ width: "100%" }}>
                        <img className="card-img-top" src="assets/img/about/harshpreet.jpeg" alt="Card image" style={{ height: "300px", objectFit: "fill" }} />
                        <div className="card-body">
                            <h4 className="card-title">Harshpreet</h4>
                            <p className="card-text">Presentaion and Front-end</p>
                            <Link to="mailto:harshpreet1410.be20@chitkara.edu.in?subject = Feedback&body = Message" className="btn contact_btn">Contact</Link>
                        </div>
                    </div>
                    <div className="about_card card m-3 p-0 col-lg" style={{ width: "100%" }}>
                        <img className="card-img-top" src="assets/img/about/raghav.jpg" alt="Card image" style={{ height: "300px", objectFit: "fill" }} />
                        <div className="card-body">
                            <h4 className="card-title">Raghav</h4>
                            <p className="card-text">Back-end</p>
                            <Link to="mailto:raghav0561.be20@chitkara.edu.in?subject = Feedback&body = Message" className="btn contact_btn">Contact</Link>
                        </div>
                    </div>
                    <div className="about_card card m-3 p-0 col-lg" style={{ width: "100%" }}>
                        <img className="card-img-top" src="assets/img/about/kunal.jpg" alt="Card image" style={{ height: "300px", objectFit: "fill" }} />
                        <div className="card-body">
                            <h4 className="card-title">Kunal</h4>
                            <p className="card-text">Database Management</p>
                            <Link to="mailto:kunal0403.be20@chitkara.edu.in?subject = Feedback&body = Message" className="btn contact_btn">Contact</Link>
                        </div>
                    </div>

                </div>
            </div>


            {/* Footer */}
            <div><Footer></Footer></div>
        </div>
    )
}
