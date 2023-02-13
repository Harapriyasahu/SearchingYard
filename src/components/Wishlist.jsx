import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {add, addToWishlist, removeFromWishlist } from "../redux/action";
import styles from "./style.module.css";


const Wishlist = () => {
    const wishlist = useSelector(state => state.products.wishlist);
    const dispatch = useDispatch();
  
    const addToCart = (title) => {
      dispatch(add(title));
    };
  
    const removeFromWishlistHandler = (title) => {
      dispatch(removeFromWishlist(title));
    };
  
    return (
        <div>
      <div className={styles.home}>   
        {wishlist?.map((item, index) => (
          <div className={styles.product_card} key={index}>
            <img src={item.image} alt={item.title}/>
            <p className={styles.caption}>{item.title}</p>
            <p>Price: ₹{item.price}</p>
            <button className={styles.carts} onClick={() => addToCart(item.title)}>
              Add to Cart
            </button>
            <button className={styles.carts} onClick={() => removeFromWishlistHandler(item.title)}>
              Remove 
            </button>
          </div>
        ))}
      </div>
      </div>
    );
  };
  

export default Wishlist