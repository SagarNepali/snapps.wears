import React from 'react'

import {ReactComponent as Logo} from '../../assets/logo.svg';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './header.scss'
import {auth} from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'

import { createStructuredSelector } from 'reselect'
import {selectCartHidden} from '../../redux/reducers/cart/cart.selectors'
import { selectCurrentUser} from '../../redux/reducers/user/user.selectors'

import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({currentUser,hidden}) => (
    <div className='header'>
        <Link className="logo-container" to="/">
            <Logo/>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/contact'>CONTACT</Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :<Link className="option" to='/signin'>SIGN IN</Link>
                
            }
            <CartIcon/>
        </div>
        {
            hidden ? null :
            <CartDropdown/>
        }
        
    </div>
)
 const mapStateToProps = createStructuredSelector({
     hidden: selectCartHidden,
     currentUser: selectCurrentUser
 })

export default connect(mapStateToProps)(Header);