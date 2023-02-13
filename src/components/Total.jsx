import React from "react";
import { useSelector } from "react-redux";
import styles from './style.module.css';

const Total = () => {
  const total = useSelector(state => state.products.total);

  return (
    <div className={styles.total}>Grand Total: ₹{total}</div>
  );
};

export default Total;
