import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const PUBLIC_KEY =
  "pk_test_51N5mNdHrf8PMCBhuMOYxk4qmORVa3l26DBFKFnMtmNt43hoZmnBufFDadAj2PffB2goh9F0ZP3boqSjAHAZU9su900l7OgFurP";
const stripePromise = loadStripe(PUBLIC_KEY);

const Checkout = ({ basket, calculateTotalPrice }) => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          basket={basket}
          calculateTotalPrice={calculateTotalPrice}
        />
      </Elements>
    </div>
  );
};

export default Checkout;
