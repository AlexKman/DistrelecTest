import React from "react";
import "./Cart.scss";
import ProductCard from "./ProductCard";

export default function Cart() {
  return (
    <div class="cart-container">
      <h3>Shopping Cart</h3>
      <ProductCard></ProductCard>
    </div>
  );
}
