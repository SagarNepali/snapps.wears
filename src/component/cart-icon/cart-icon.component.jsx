import React from 'react'
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg' 

import {connect } from 'react-redux'
import {toggleCartHidden} from '../../redux/reducers/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/reducers/cart/cart.selectors'

import {} from '../../redux/reducers/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return <div className='cart-icon'>
        <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden}/>
        <span className='item-count'> {itemCount}</span>
    </div>
}

const mapDispatchToProps = dispatch => ({

    toggleCartHidden : () => dispatch(toggleCartHidden())

})

const mapStateToProps =  createStructuredSelector({

    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);