import React from "react";
import "../../App.css";

export default function Services() {
  return (
    <div className="services">
      <div className="services-page-header">
        <h1 className="services-header">Services</h1>
      </div>
      <div className="services-body">
        <div className="services-container">
          <div className="service">
            <div className="services-icon">
              <i className="fas fa-plane-departure"></i>
            </div>
            <h2 className="service-title">Flight</h2>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              ad ipsa quis? Quas quod fugit, voluptatibus natus magnam quasi
              aliquid.
            </p>
            <a href="#">More</a>
          </div>
          <div className="service">
            <div className="services-icon">
              <i className="fas fa-hotel"></i>
            </div>
            <h2 className="service-title">Hotel</h2>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              ad ipsa quis? Quas quod fugit, voluptatibus natus magnam quasi
              aliquid.
            </p>
            <a href="#">More</a>
          </div>
          <div className="service">
            <div className="services-icon">
              <i className="fas fa-suitcase"></i>
            </div>
            <h2 className="service-title">Kargo</h2>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              ad ipsa quis? Quas quod fugit, voluptatibus natus magnam quasi
              aliquid.
            </p>
            <a href="#">More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
