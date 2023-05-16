import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "../styles/CheckoutForm.css";

const CheckoutForm = ({ basket, calculateTotalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

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
          <CardElement
            id="cardNumber"
            options={{
              hidePostalCode: true,
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  backgroundColor: "white",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
              },
            }}
          />
        </div>
        <button type="submit">PAY {calculateTotalPrice()} $</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
