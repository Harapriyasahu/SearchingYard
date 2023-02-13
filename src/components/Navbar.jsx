import React from "react";
import { Link } from "react-router-dom";
// import {select } from "@chakra-ui/react"

import styles from './style.module.css';

export const Navbar = () => {
  return (
    <div className={styles.nav} >
      <Link to="/">
      <p className={styles.shop}>Fake Store</p>
      </Link> 
      <div className={styles.navbar}>
      <Link to='/wishlist'>
        <div className={styles.wishNav}>Wishlist🤍</div>
      </Link>
      <Link to='/cart'>
        <div className={styles.cartNav}>Cart🛒</div>
      </Link>
      </div>
      
    </div>
  );
};
