import React from 'react'

export default function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{marginTop: '100px', objectFit: "contain !important", boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'}}>
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner" id='carousel'>
            <div className='carousel-caption' style={{zIndex: "10"}}>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-mute text-white" type="submit" style={{backgroundColor: "#4d29a7", width: '10%'}}>Search</button>
                </form>
            </div>
            <div className="carousel-item active">
                <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="..." style={{filter: "brightness(60%)"}} />
            </div>
            <div className="carousel-item">
                <img src="https://source.unsplash.com/random/900x700/?pizza" className="d-block w-100" alt="..." style={{filter: "brightness(60%)"}} />
            </div>
            <div className="carousel-item">
                <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100" alt="..." style={{filter: "brightness(60%)"}} />
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
  )
}
