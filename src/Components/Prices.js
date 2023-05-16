import React, { useState } from "react";
import "../styles/Prices.css";
import Checkout from "./Checkout";
import Footer from "./Footer";

const Prices = ({ prices, cover, name }) => {
  const [basket, setBasket] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleIncrement = (item) => {
    setBasket((prevBasket) => [...prevBasket, item]);
    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + 1);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + Number(item.value.replace("$", ""))
    );
  };

  const handleDecrement = (item) => {
    const updatedBasket = basket.filter((basketItem) => basketItem !== item);
    setBasket(updatedBasket);
    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - 1);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice - Number(item.value.replace("$", ""))
    );
  };

  const handleClearBasket = () => {
    setBasket([]);
    setTotalQuantity(0);
    setTotalPrice(0);
  };

  return (
    <div className="prices-container">
      <div className="prices">
        {/* <h1>BOOK YOUR TICKET</h1> */}
        {prices.map((price, index) => (
          <ul key={index}>
            <li className="list-price">{`${price.value}$`}</li>
            <li className="list-info">{price.info}</li>
            <div className="counter">
              <button onClick={() => handleDecrement(price)}>-</button>
              <span>{basket.filter((item) => item === price).length}</span>
              <button onClick={() => handleIncrement(price)}>+</button>
            </div>
          </ul>
        ))}
      </div>
      <div className="paiement-container">
        <div className="basket">
          {/* <h1>YOUR BASKET</h1> */}
          {basket.length > 0 ? (
            <>
              <div className="booking-infos">
                <img src={cover} alt="" />
                <p>{name}</p>
              </div>
              <div className="booking-details">
                {/* <p>Total Quantity: {totalQuantity}</p> */}
                {/* <p>Total Price: ${totalPrice.toFixed(2)}</p> */}
                <ul>
                  {basket.map((item, index) => (
                    <li key={index}>{`1 X ${item.info} ${item.value}$`}</li>
                  ))}
                </ul>
              </div>
              <button onClick={handleClearBasket}>Clear Basket</button>
            </>
          ) : (
            <p>Your basket is empty.</p>
          )}
        </div>
        <div className="pay">
          <Checkout
            basket={basket}
            calculateTotalPrice={() => totalPrice.toFixed(2)}
          />
        </div>
      </div>
    </div>
  );
};

export default Prices;
