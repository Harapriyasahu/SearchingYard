import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './style.module.css';
import Total from "./Total";
import { add, subtract, removeProductsFromCart } from "../redux/action";



const CartItem = () => {
    const cart = useSelector((state) => state.products.cart);
    const [cartdata, setCartdata] = useState(null)
    const dispatch = useDispatch();

    const addToCart = (e, title) => {
        dispatch(add(title));
    };

    const subtractFromCart = (e, title) => {
        dispatch(subtract(title));
    };

    const removeCartItem = (e, title, amount) => {
        dispatch(removeProductsFromCart(title, amount));
    };

    useEffect(() => {
        setCartdata(cart)
    }, [cart])



    return (
        <div className={styles.cartCard}>
            <div className={styles.card}>
                {cartdata?.map((i, j) => {
                    return (
                        <div key={j}>
                            <div >
                                <div className={styles.product_card}>
                                    <img src={i.image} alt={i.title} />
                                    <p className={styles.caption}>{i.title}</p>
                                    <p>Price: ₹{i.price}</p>
                                    <div className="number">
                                        <button onClick={e => subtractFromCart(e, i.title)}>-</button>
                                        <button>{i.cartCount}</button>
                                        <button onClick={e => addToCart(e, i.title)}>+</button>
                                        <br />
                                        <button className={styles.carts}
                                            onClick={e =>
                                                removeCartItem(e, i.title, i.price * i.cartCount)
                                            }
                                        >
                                            Remove from cart
                                        </button>
                                        {/* <p style={{fontSize:"18px", fontWeight:"500"}}>
                                            Total: ₹{i.price * i.cartCount}
                                        </p> */}
                                    </div>

                                </div>

                            </div>
                            <div>

                            </div>

                        </div>

                    );
                })}
            </div>
            <Total />
        </div>
    )
}

export default CartItem