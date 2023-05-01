import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import CircularFoodGrid from '../components/CircularFoodGrid'
import '../css/PlusMinusButton.css'
import Cards from '../components/Cards'

export default function Mainpage() {
  return (
    <div>
      <div><Navbar></Navbar></div>

      <div><Carousel></Carousel></div>
      <div><CircularFoodGrid></CircularFoodGrid></div>
      <div className='m-5'>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </div>
      
      <div><Footer></Footer></div>
    </div>
  )
}
