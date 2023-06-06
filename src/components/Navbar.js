import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <header className="header">
        <div className="navbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <Link className="navbar-brand" to="/">
                    <img src="assets/img/logo/logo_12.png" alt="Logo" />
                  </Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                    <ul id="nav" className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="page-scroll" to="/" style={{ textDecoration: 'none' }}>Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" to="/about" style={{ textDecoration: 'none' }}>About</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" to="/trivia" style={{ textDecoration: 'none' }}>Food Trivia</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/signup" className="main-btn btn-hover wow fadeInUp" data-wow-delay=".6s" style={{ color: 'white', padding: '10px', textDecoration: 'none' }}>Sign Up</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
