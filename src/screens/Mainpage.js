import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Footer from '../components/Footer'
// import CircularFoodGrid from '../components/CircularFoodGrid'
import '../css/PlusMinusButton.css'
import Cards from '../components/Cards'

export default function Mainpage() {
  const [search, setSearch] = useState('')
  const [foodCat, setFoodCat] = useState([])
  const [foodItem, setFoodItem] = useState([])
  const navigate = useNavigate()

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/users/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);

    // console.log(response[0], response[1])
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    navigate("/login")
  }

  return (
    <div>
      {/* Navbar */}
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
                          <Link className="page-scroll" to="/trivia" style={{ textDecoration: 'none' }}>Trivia</Link>
                        </li>

                        {(localStorage.getItem("authToken")) ?
                          <li className="nav-item">
                            <Link className="page-scroll" to="#home" style={{ textDecoration: 'none' }}>My Orders</Link>
                          </li>
                          : ""}


                        {(!localStorage.getItem("authToken")) ?
                          <div className='d-flex'>
                            <li className="nav-item">
                              <Link to="/signup" className="main-btn btn-hover wow fadeInUp" data-wow-delay=".6s" style={{ color: 'white', padding: '10px', textDecoration: 'none' }}>Sign Up</Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/login" className="main-btn btn-hover wow fadeInUp" data-wow-delay=".6s" style={{ color: 'white', padding: '10px', textDecoration: 'none' }}>Log In</Link>
                            </li>
                          </div>
                          :
                          <div className='d-flex'>
                            <li className="nav-item">
                              <Link className="page-scroll" to="#about" style={{ textDecoration: 'none' }}>My Cart{" "}<Badge pill bg="primary">2</Badge> </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/" className="main-btn btn-hover wow fadeInUp" onClick={handleLogout} data-wow-delay=".6s" style={{ color: 'white', padding: '10px', textDecoration: 'none' }}>Logout</Link>
                            </li>
                          </div>
                        }
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Carousel  */}
      <div>
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ marginTop: '100px', objectFit: "contain !important", boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px' }}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner" id='carousel'>
            <div className='carousel-caption' style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                <button className="btn btn-outline-mute text-white" type="submit" style={{ backgroundColor: "#4d29a7", width: '10%' }}>Search</button>
              </div>
            </div>
            <div className="carousel-item active">
              <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="..." style={{ filter: "brightness(60%)" }} />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?pizza" className="d-block w-100" alt="..." style={{ filter: "brightness(60%)" }} />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100" alt="..." style={{ filter: "brightness(60%)" }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Circular Grid */}
      {/* <div><CircularFoodGrid></CircularFoodGrid></div> */}

      {/* Card */}
      <div className='container'>
        {
          foodCat !== [] ? foodCat.map((data) => {
            return (
              <div className='row mb-3'>
                <div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
                <hr />
                {foodItem !== [] ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                  .map(filterItems => {
                    return (
                      <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                        <Cards
                          options={filterItems.options[0]}
                          foodItem={filterItems}
                          // discription={filterItems.discription}
                        ></Cards>
                      </div>
                    )
                  }) : <div>No such Data Found</div>}
              </div>
            )
          }) : ""
        }
      </div>

      <div><Footer></Footer></div>
    </div>
  )
}
