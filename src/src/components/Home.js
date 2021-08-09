import React from "react";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home-container">
      <div className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <h1>Lorem Ipsum. Blah Blah blah.</h1>
              <p>
                Lorem Ipsum. Blah Blah blah.Lorem Ipsum. Blah Blah blah. Lorem
                Ipsum. Blah Blah blah.Lorem Ipsum. Blah Blah blah. Lorem Ipsum.
                Blah Blah blah.Lorem Ipsum. Blah Blah blah. Lorem Ipsum. Blah
                Blah blah.Lorem Ipsum. Blah Blah blah.{" "}
              </p>
              <a href="#" className="bt btn-lg btn-primary">
                Click me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
