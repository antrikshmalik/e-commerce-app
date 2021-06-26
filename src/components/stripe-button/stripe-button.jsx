import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51J6ZNtSFZ24KHTvgOaCNudlfeFBrzv800c3p4GYxmBbIdVgJ6E7fvct43W1jRjb7x2XaIOEXOK4LMkgXfvDTw9zS008sjB0j0F";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }

  return (
      <div>
        <StripeCheckout
            label="Pay Now"
            name="e-commerce-app"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
      </div>
  );
};

export default StripeButton;
