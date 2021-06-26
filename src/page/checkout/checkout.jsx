import React from 'react';
import "./checkout.scss";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart-selector";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeButton from "../../components/stripe-button/stripe-button";

const Checkout = ({cartItems, total}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">`
                <div className="header-blocks">
                    <span>Products</span>
                </div>
                <div className="header-blocks">
                    <span>Description</span>
                </div>
                <div className="header-blocks">
                    <span>Quantity</span>
                </div>
                <div className="header-blocks">
                    <span>Price</span>
                </div>
                <div className="header-blocks">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem=>
                   <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                )
            }
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
            <div className="test-warning">
                *Please use the following test credit card for payments*
                <br/>
                4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
            </div>
            <StripeButton price={total} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);
