import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_iMXp8d1gotFCOD5Y5Qj1NeCi00AAwsvn0G";

  const onToken = (token) => {
    console.log(token);
    alert("payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Oxy Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
