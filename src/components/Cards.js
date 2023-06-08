import React, { useEffect } from 'react';
import { useDispatchCart, useCart } from '../components/ContextReducer';
import { useState } from 'react';
import { useRef } from 'react';
import '../css/Cards.css';

export default function Cards(props) {
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

  let dispatch = useDispatchCart();
  let data = useCart();

  let options = props.options;
  let priceOptions = options ? Object.keys(options) : [];


  const [qty, setQty] = useState(1);
  const [size, setSize] = useState('');

  const handleAddToCart = async () => {
    setQty(count)
    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item
        break;
      }
    }
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: count })
        return
      }
      else if (food.size !== size) {
        await dispatch({
          type: 'ADD',
          id: props.foodItem._id,
          name: props.foodItem.name,
          img: props.foodItem.img,
          price: finalPrice,
          qty: count,
          size: size,
        });
        return
      }
      return
    }
    await dispatch({
      type: 'ADD',
      id: props.foodItem._id,
      name: props.foodItem.name,
      img: props.foodItem.img,
      price: finalPrice,
      qty: count,
      size: size,
    });
    // console.log(data);
  }

  const priceRef = useRef();
  let finalPrice = 0;

  if (options && options[size]) {
    finalPrice = count * parseInt(options[size]);
  }

  useEffect(() => {
    if (priceRef.current) {
      setSize(priceRef.current.value);
    }
  }, [priceRef.current]);

  return (
    <div id='cardContainer'>
      <div
        className="card mt-4"
        style={{
          width: '18rem',
          maxHeight: '460px',
          boxShadow:
            'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
        }}
      >
        <img
          src={props.foodItem.img}
          className="card-img-top"
          alt="..."
          style={{ height: '160px', objectFit: 'fill' }}
        />

        <div className="card-body">
          <h5 id="heading" className="card-title text-center">
            {props.foodItem.name}
          </h5>
          {/* <p className="card-text">{props.discription}</p> */}

          <div className="container w-100">
            {/* Quantity Counter */}
            <div className="qty mt-3 mb-3">
              <span className="minus bg-dark" onClick={handleDecrement}>
                -
              </span>
              <input
                type="number"
                className="count"
                name="qty"
                value={count}
                onChange={(e) => setCount(parseInt(e.target.value))}
              />
              <span className="plus bg-dark" onClick={handleIncrement}>+</span>
            </div>
            {/* Size Selector */}
            <div className='select-dropdown'>
                <select id='sizeSelect' className="h-100 mb-2 rounded custom-select text-capitalize" onChange={(e) => setSize(e.target.value)} ref={priceRef}>
                  {priceOptions.map((data) => {
                    return (
                      <option className='text-capitalize' key={data} value={data}>{data}
                      </option>
                    );
                  })}
                </select>
              <div className="d-inline h-100" id='finalPrice'>₹{finalPrice}/-</div>
            </div>



            <hr></hr>
            <button className="btn btn-success justify-center ms-2" id='AddToCart' onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
