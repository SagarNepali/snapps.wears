import React from 'react'

import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/reducers/cart/cart.selectors'

import CheckoutItem from '../../component/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../component/stripe-button/stripe-button.component';
import './checkout.styles.scss'

const CheckoutPage = ({cartItems,total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-blocks">
                <span>Product</span>
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
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }
        <div className="total">Total: ${total}</div>

        <div className='test-warning'>
            *Please use the following test credit card for payments*
            <br/> 
            4242 4242 4242 4242 Exp: Any future date  CVC: Any 3 digits
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);