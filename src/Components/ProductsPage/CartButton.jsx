import React from 'react';
import styles from "./ProductPage.module.css";
import { FaCartShopping } from "react-icons/fa6";

const CartButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.add_to_cart}>
        <FaCartShopping />
      Add to Cart
    </button>
  );
};

export default CartButton;

