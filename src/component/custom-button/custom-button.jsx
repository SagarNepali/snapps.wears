import React from 'react'

import './custom-button.scss'

const CustomButton = ({children,isGoogleSignIn,...customButtonProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...customButtonProps}>
        {children}
    </button>
)

export default CustomButton;