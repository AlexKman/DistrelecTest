import React from "react";
import "./ProductCard.scss";

export default function ProductCard() {
  return (
    <div>
      <div class="card">
        <div class="row no-gutters">
          <div class="col-auto">
            <img
              src={process.env.PUBLIC_URL + "/images/distrelecPart.jpg"}
              class="product-image"
              alt=""
            ></img>
          </div>
          <div class="col">
            <div class="card-block px-2">
              <h4 class="card-title">Title</h4>
              <p class="card-text">Description</p>
            </div>
          </div>
        </div>
        <div class="card-footer w-100 text-muted">
          Footer stating cats are CUTE little animals
        </div>
      </div>
    </div>
  );
}
