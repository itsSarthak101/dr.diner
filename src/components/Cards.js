import React from 'react'
import { useState } from 'react'

export default function Cards() {
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
        <div className="card mt-3" style={{width: "18rem", maxHeight: "360px", boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'}}>
            <img src="https://www.expatica.com/app/uploads/sites/5/2014/05/french-food.jpg" className="card-img-top" alt="..." />
            
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
  )
}
