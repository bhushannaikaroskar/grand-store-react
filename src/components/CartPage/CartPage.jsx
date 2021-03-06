import React from "react";
import { useCartContext } from "../../context";
import { useDocumentTitle } from "../../utils";
import CartCard from "../CartCard";
import DisplayMessage from "../DisplayMessage";
import Checkout from "./Checkout";

export default function CartPage() {
    const { cart} = useCartContext();
    useDocumentTitle("Cart")

    return (
        <main className="grand-main">
            <h1 className="text-align-center font-black">My Cart {cart.length>0?`(${cart.length})`:"" }</h1>
            <div className="cart-wrapper flex align-items-start justify-content-center p-y-2">
                <ul className="list">
                    {cart.map((product) => {
                        return <li key={product._id} className="list-item">
                            <CartCard productData={product}/>
                        </li>;
                    })}
                </ul>
                {cart.length>0 && <Checkout/>}
                {cart.length===0 && <DisplayMessage message={"Your Cart is Empty. Shop Something"}/>}
            </div>
        </main>
    );
}
