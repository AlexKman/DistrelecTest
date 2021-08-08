import React from "react";
import "./ProductCard.scss";

export default function ProductCard() {
  return (
    <div class="card">
      <div class="row no-gutters">
        <div class="col-auto">
          <img
            src={process.env.PUBLIC_URL + "/images/DistrelecPart.jpg"}
            class="product-image"
            alt=""
          ></img>
        </div>
        <div class="col">
          <div class="card-block px-2">
            <h4 class="card-title">ABX00023 - Arduino MKR WIFI 1010</h4>
            <p class="card-text">
              The MKR WIFI 1010 is a significant improvement on the MKR 1000
              WIFI. It's equipped with an ESP32 module made by U-BLOX.
              <br></br>
              <br></br> This board aims to speed up and simplify the prototyping
              of WiFi based IoT applications thanks to the flexibility of the
              ESP32 module and its low power consumption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
