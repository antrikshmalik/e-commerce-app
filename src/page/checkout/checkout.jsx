import React from 'react';
import "./checkout.scss";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart-selector";

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
                    cartItem.name
                )
            }
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);
