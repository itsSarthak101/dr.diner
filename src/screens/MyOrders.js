import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

export default function MyOrders() {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("authToken")
        navigate("/login")
    }

    const [orderData, setorderData] = useState({})

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:5000/users/myorderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            await setorderData(response)
        })
    }

    useEffect(() => {
        fetchMyOrder()
    }, [])


    return (
        <>
            <div>
                {/* Navbar */}
                <div>
                    <header className="header mb-5 md-5">
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
            </div>
            <div className='h4 ml-5' style={{color: '#4d29a7', fontWeight: 'bold', marginTop: '150px', fontSize: '50px'}}>
                Your Orders!
            </div>
            {/* Fetched Order Data */}
            <div>
                <div className='row'>
                    {orderData !== {} ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div  >
                                                    {arrayData.Order_date ? <div className='mt-5 ml-5 mr-5'>

                                                        {data = arrayData.Order_date}
                                                        <hr />
                                                    </div> :
                                                        <div className='col-12 col-md-6 ml-5 col-lg-4'>
                                                            <div className="card mt-3 mx-2" style={{ width: "20rem", maxHeight: "400px", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
                                                                <div className="row no-gutters">
                                                                    <div className="col-4">
                                                                        <img src={arrayData.img} className="card-img" alt="..." style={{ height: "100%", objectFit: "cover" }} />
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <div className="card-body">
                                                                            <h6 className="card-title" style={{color: '#4d29a7', fontSize: '20px'}}>{arrayData.name}</h6>
                                                                            <div className='d-flex flex-wrap'>
                                                                                <span className='mr-2'>{arrayData.qty}</span>
                                                                                <span className='mr-2'>{arrayData.size}</span>

                                                                            </div>
                                                                            <div className='mt-2'>
                                                                                <div className='d-inline ms-2 fs-6'>
                                                                                    ₹{arrayData.price}/-
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })
                                    )
                                }) : ""
                        )
                    }) : ""}
                </div>
            </div>

            {/* Footer */}
            <div>
                <Footer />
            </div>
        </>
    )
}
