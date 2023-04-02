import React from 'react'

export default function Navbar() {
  return (
    <div>
      <header className="header">
        <div className="navbar-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="#">
                                <img src="assets/img/logo/logo4.svg" alt="Logo" />
                            </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="toggler-icon"></span>
      <span className="toggler-icon"></span>
      <span className="toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
      <ul id="nav" className="navbar-nav ml-auto">
      <li className="nav-item">
      <a className="page-scroll" href="#home" style={{textDecoration: 'none'}}>Home</a>
      </li>
      <li className="nav-item">
      <a className="page-scroll" href="#services" style={{textDecoration: 'none'}}>Services</a>
      </li>
      <li className="nav-item">
      <a className="page-scroll" href="#about" style={{textDecoration: 'none'}}>About</a>
      </li>
      <li className="nav-item">
      <a className="page-scroll" href="#how" style={{textDecoration: 'none'}}>Food Trivia</a>
      </li>
      <li className="nav-item">
      <a href="#" className="main-btn btn-hover wow fadeInUp" data-wow-delay=".6s" style={{color: 'white', padding: '10px', textDecoration: 'none'}}>Sign Up</a>
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
