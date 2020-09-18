import React from 'react';
import './css/Prices.css'

const Prices = () => {
    return (
        <div className="prices">
           <div className="prices-container">
           <h1 className="prices-header">Prices</h1>
            <div className="price-boxs">
                <div className="price">
                    <div className="price-type-header">
                        <h2>Economy</h2>
                        <p className="price-amount"><span className="price-p">250$</span> <span>/month</span></p>
                    </div>
                    <div className="price-property">
                        <ul className="price-lists">
                            <li>1 Flight</li>
                            <li>1 Eat</li>
                            <li>1 Tea time</li>
                            <li>1 Coffe time</li>
                        </ul>
                        <a href="#" className="select-paket">Choose</a>
                    </div>
                </div>
                <div className="price">
                    <div className="price-type-header">
                        <h2>Business</h2>
                        <p className="price-amount"><span className="price-p">500$</span> <span>/month</span></p>
                    </div>
                    <div className="price-property">
                        <ul className="price-lists">
                            <li>1 Flight</li>
                            <li>2 Eat</li>
                            <li>2 Tea time</li>
                            <li>2 Coffe time</li>
                        </ul>
                        <a href="#" className="select-paket">Choose</a>
                    </div>
                </div>
                <div className="price">
                    <div className="price-type-header">
                        <h2>First Class</h2>
                        <p className="price-amount"><span className="price-p">1000$</span> <span>/month</span></p>
                    </div>
                    <div className="price-property">
                        <ul className="price-lists">
                            <li>1 Flight</li>
                            <li>10 Eat</li>
                            <li>10 Tea time</li>
                            <li>10 Coffe time</li>
                        </ul>
                        <a href="#" className="select-paket">Choose</a>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Prices
