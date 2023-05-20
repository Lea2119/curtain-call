import React, { useState } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "../styles/CheckoutForm.css";

const CheckoutForm = ({ basket, calculateTotalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [cardType, setCardType] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("Error:", error);
      setPaymentStatus("failed");
      return;
    }

    console.log("Payment Method:", paymentMethod);
    setPaymentStatus("success");
  };

  const inputStyle = {
    iconColor: "#c4f0ff",
    color: "#ff0",
    fontWeight: "500",
    fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
    fontSize: "16px",
    fontSmoothing: "antialiased",
    "::placeholder": {
      color: "#87BBFD",
    },
  };

  const handleCardChange = (event) => {
    setCardType(event.brand);
  };

  return (
    <div className="checkout">
      <h1>CHECKOUT</h1>
      {paymentStatus === "success" && (
        <div className="alert success">Payment succeeded!</div>
      )}
      {paymentStatus === "failed" && (
        <div className="alert error">Payment failed - Please try again.</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Card Number</label>
          <CardNumberElement
            options={{ style: inputStyle }}
            onChange={handleCardChange}
          />
        </div>
        <div className="form-group">
          <label>Expiration Date</label>
          <CardExpiryElement options={{ style: inputStyle }} />
        </div>
        <div className="form-group">
          <label>CVC</label>
          <CardCvcElement options={{ style: inputStyle }} />
        </div>
        <button type="submit">PAY {calculateTotalPrice()} £</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
