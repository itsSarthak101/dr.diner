import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import CircularFoodGrid from '../components/CircularFoodGrid'
import '../css/PlusMinusButton.css'


export default function Mainpage() {

    const [count, setCount] = useState(1);
  
    function handleIncrement() {
      setCount(count + 1);
    }
  
    function handleDecrement() {
      if (count === 1) {
        setCount(1);
      } else {
        setCount(count - 1);
      }
    }

  return (
    <div>
      <div><Navbar></Navbar></div>
      <div><Carousel></Carousel></div>
      <div><CircularFoodGrid></CircularFoodGrid></div>
      
      <div>
        <div className="card mt-3" style={{width: "18rem", maxHeight: "360px"}}>
          <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 id="heading" className="card-title">Card title</h5>
            <p className="card-text">Bla Bla Bla about food</p>
            <div className='container w-100'>
              <div className="qty mt-5">
                <span className="minus bg-dark" onClick={handleDecrement}>-</span>
                <input type="number" className="count" name="qty" value={count} />
                <span className="plus bg-dark" onClick={handleIncrement}>+</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      <div><Footer></Footer></div>
    </div>
  )
}
