import React from "react";
import { useCartContext } from "../../context";

export default function Checkout() {

    const {cart} = useCartContext()

    const calculateTotalPrice = (cart)=>{
        let total = 0;
        let discountTotal = 0;
        cart.forEach((product)=>{
            total = total + (product.price.newPrice * product.qty)
            discountTotal = discountTotal + (product.price.oldPrice * product.qty)
        })
        discountTotal = discountTotal - total;
        return [total,discountTotal];
    }

    const [totalPrice,discount] = calculateTotalPrice(cart);
    const deliveryCharge = (totalPrice>=500 || cart.length===0)?0:49;

    return (
        <div className="order-checkout ">
            <div className="order-header">
                <h2 className="fw-600 p-y-1 ">Order Summary</h2>
            </div>
            <hr />
            <ul className="list p-y-1">
                <li className="list-item order-item">
                    <p className="">Total Price</p>
                    <p className="fw-500">Rs {totalPrice}</p>
                </li>
                <li className="list-item order-item">
                    <p className="">Discount</p>
                    <p className="fw-500 font-primary">Rs {discount}</p>
                </li>
                <li className="list-item order-item">
                    <p className="">Delivery Charges</p>
                    <p className="fw-500">Rs {deliveryCharge}</p>
                </li>
            </ul>
            <div>
                <div className="input-wrapper">
                    <label className="input-label">COUPON CODE:</label>
                    <input
                        type="text"
                        className="input-field input-color-success coupon"
                    />
                </div>
            </div>
            <hr className="margin-2" />
            <div className="order-item p-y-1">
                <h3 className="fw-600">Total Amount</h3>
                <h3 className="fw-600">Rs {totalPrice + deliveryCharge } </h3>
            </div>
            <div className="flex p-y-2_5">
                <button className="btn btn-primary flex-grow-1">
                    Place Order
                </button>
            </div>
        </div>
    );
}
