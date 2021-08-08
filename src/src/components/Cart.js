import React from "react";
import "./Cart.scss";
import ProductCard from "./ProductCard";
import Carousel from "./Carousel";

export default function Cart() {
  return (
    <div class="cart-container">
      <h3 class="cart-header">Shopping Cart</h3>
      <ProductCard></ProductCard>
    </div>
  );
}
