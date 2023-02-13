import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addToCart, add, subtract,addToWishlist } from '../redux/action';
import styles from './style.module.css';
import Filter from "./Filter";

const Home = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();


  const addToCartHandler = (e, title) => {
    dispatch(addToCart(title));
  };
  const addToWishlistHandler = (e, title) => {
    dispatch(addToWishlist(title));
  };

  const addHandler = (e, title) => {
    dispatch(add(title));
  };

  const subtractHandler = (e, title) => {
    dispatch(subtract(title));
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Filter/>
      <div className={styles.home}>
      {products.map((product) => (
        <div className={styles.product_card} key={product.id}>
          <img src={product.image} alt={product.title} />
          <p className={styles.caption}>{product.title}</p>
          {/* <p>{product.description}</p> */}
          <h3>Price: ₹{product.price}</h3>

          
            <button className={styles.carts} onClick={e => addToCartHandler(e, product.title)}>
              Add to cart
            </button>
          

          <br />
          <button className={styles.wish}onClick={e => addToWishlistHandler(e, product.title)}>Add to Wishlist</button>
        </div>
      ))}
    </div>
    </div>
  );
};


const mapStateToProps = state => ({
  products: state.products.products,
  cart: state.products.cart,
  total: state.products.total
});


export { Home, mapStateToProps }