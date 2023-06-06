import React from 'react'
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div style={{marginTop: '5%', paddingLeft: '4%', paddingRight: '4%', borderTop: '1px solid grey'}}>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <p className="col-md-4 mb-0" style={{color: '#4d29a7'}}>© 2023 DrDiner, Inc.</p>
          <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
              <img src="assets/img/logo/logo_23.png" alt="Logo" style={{height: '10%', width: '10%'}}/>
          </Link>

        <ul className="nav col-md-4 justify-content-end" style={{color: '#4d29a7'}}>
          <li className="nav-item"><Link to="/" className="nav-link px-2" style={{color: '#4d29a7'}}>Home</Link></li>
          <li className="nav-item"><Link to="#about" className="nav-link px-2" style={{color: '#4d29a7'}}>About</Link></li>
          <li className="nav-item"><Link to="/trivia" className="nav-link px-2" style={{color: '#4d29a7'}}>Trivia</Link></li>
          <li className="nav-item"><Link to="#Socials" className="nav-link px-2" style={{color: '#4d29a7'}}>Socials</Link></li>
        </ul>
      </footer>
    </div>
  )
}
