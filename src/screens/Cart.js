import { useDispatchCart, useCart } from '../components/ContextReducer';
import '../css/Cart.css';
import React, { useState } from "react";

export default function Cart() {
    const [discountCode, setDiscountCode] = useState("");
    const [discountAmount, setDiscountAmount] = useState(0);

    let data = useCart();
    let dispatch = useDispatchCart();

    if (data.length === 0) {
        return (
            <div>
                <div className="w-100 text-center Empty_cart_header">The Cart is Empty!</div>
            </div>
        );
    }

    let totalPrice = data.reduce((total, food) => total + food.price, 0);
    let discountedPrice = totalPrice - discountAmount;

    const handleDiscountCodeChange = (event) => {
        setDiscountCode(event.target.value);
    };

    // Giftcard or Coupon System
    const applyDiscount = () => {
        if (discountCode === "DRFLAT100") {
            let MIN_ORDER_AMOUNT = 500
            if(totalPrice < MIN_ORDER_AMOUNT) {
                alert(`Order total must be at least ₹${MIN_ORDER_AMOUNT} to avail the discount.`)
            }
            else if(totalPrice >= MIN_ORDER_AMOUNT){
                setDiscountAmount(100);
            }
        }
        else if (discountCode === "DINER10") {
            let MIN_ORDER_AMOUNT = 120
            if(totalPrice < MIN_ORDER_AMOUNT) {
                alert(`Order total must be at least ₹${MIN_ORDER_AMOUNT} to avail the discount.`)
            }
            else if(totalPrice >=MIN_ORDER_AMOUNT) {
                setDiscountAmount(totalPrice * 0.1);
            }
        }
        else if (discountCode === "DINER30") {
            let MIN_ORDER_AMOUNT = 160
            if(totalPrice < MIN_ORDER_AMOUNT) {
                alert(`Order total must be at least ₹${MIN_ORDER_AMOUNT} to avail the discount.`)
            }
            else if(totalPrice >= MIN_ORDER_AMOUNT) {
                setDiscountAmount(totalPrice * 0.3); // Set a fixed discount amount for this example
            }   
        }
        else {
            alert(`Enter a valid coupon to avail the discount.`)
            setDiscountAmount(0); // Reset the discount amount if the code is invalid
        }
    };

    const handleCheckOut = async() => {
        const userEmail = localStorage.getItem("userEmail");
        let response = await fetch("http://localhost:5000/users/orderData", {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify({
                order_data: data, 
                email: userEmail,
                order_date: new Date().toDateString(),
                total_price: discountedPrice
            })
        });
        console.log("Order Response:", response);
        if(response.status === 200 ) {
            dispatch({ type: "DROP" });
        }
    };
    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-8">
                    <div className="p-2">
                        <h4 id='ready_to_checkout'>Your Cart is Ready to Checkout!</h4>
                        <div className="d-flex flex-row align-items-center pull-right">
                            <span className="mr-1">Sort by:</span>
                            <span className="mr-1 font-weight-bold">Price</span>
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </div>
                    {data.map((food, index) => (
                        <div
                            key={food.id}
                            className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-1 rounded"
                        >
                            <div className="mr-1">
                                <img className="rounded" src={food.img} width="70" alt="Product" />
                            </div>
                            <div className="d-flex flex-column align-items-center mr-4 product-details">
                                <span className="font-weight-bold ml-3">{food.name}</span>
                                <div className="d-flex flex-row product-desc">
                                    <div className="size mr-1">
                                        <span className="size-quantity">Size:</span>
                                        <span className="font-weight-bold">&nbsp;{food.size}</span>
                                    </div>
                                    <div className="color">
                                        <span className="size-quantity">Quantity:</span>
                                        <span className="font-weight-bold">&nbsp;{food.qty}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h5 id="price" className='mr-3'>₹{food.price}</h5>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fa fa-trash mb-1 text-danger trash" onClick={() => { dispatch({ type: "REMOVE", index: index }) }} ></i>
                            </div>
                        </div>
                    ))}
                    <hr></hr>
                    <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                        <input type="text" className="form-control gift-card" placeholder="discount code/gift card" value={discountCode} onChange={handleDiscountCodeChange} />
                        <button className="btn btn-outline-secondary ml-2 apply" type="button" onClick={applyDiscount}>Apply</button>
                    </div>
                    <div>
                        <h1 className='fs-2 mt-3 ml-2'>Total Price: ₹{discountedPrice > 0 ? discountedPrice : totalPrice}/-</h1>
                    </div>
                    <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                        <button className="btn btn-warning btn-block btn-lg" id="pay-button" type="button" onClick={handleCheckOut}>Proceed to Pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
}