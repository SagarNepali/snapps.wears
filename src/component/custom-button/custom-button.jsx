import React from 'react'

import './custom-button.scss'

const CustomButton = ({children,...customButtonProps}) => (
    <button className="custom-button" {...customButtonProps}>
        {children}
    </button>
)

export default CustomButton;