import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
// import Loading from '../components/Loading'

export default function Home() {
  return (
    <div>
        {/* <div><Loading></Loading></div> */}
        <div> <Navbar></Navbar> </div>
        <section id="home" className="hero-section">
          <div className="hero-shape">
            <img src="assets/img/hero/hero-shape.svg" alt="" className="shape" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-content">
                  <h1 className="wow fadeInUp" data-wow-delay=".2s"><span id="main-heros" style={{color: '#4d29a7', fontWeight: 'bold'}}>DOCTOR DINER </span><span>For all your Hunger Problems</span></h1>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                  Order food for your favrourite restaurants in just some few easy clicks right from the comfort of your home!
                  </p>
                  <Link to="/login" className="main-btn btn-hover wow fadeInUp" data-wow-delay=".6s" style={{textDecoration: 'none'}}>Sign In</Link>
                </div>
              </div>
              <div className="col-lg-6">
              <div className="hero-img wow fadeInUp" data-wow-delay=".5s">
                <img src="assets/img/hero/food_photo_4.png" style={{ width: '100%', height: '100%', padding: '0px' }} alt="" />
              </div>
            </div>
          </div>
          </div>
        </section>
        <div> <Footer></Footer> </div>
      </div>
  )
}
