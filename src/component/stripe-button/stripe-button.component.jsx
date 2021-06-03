import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100; //stripe uses in cents

    const publishableKey = 'pk_test_51IyG6FSCk6ah7OdwV2MP3mIAgq5yh59VeixfXLGucmL72Zkt8JJBMZA4L1yG5jRQddy9B9wCzoy7eJco0CYHIjtJ00TFdHjuSO';

    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }

    return(
        <StripeCheckout
            name="Snapps Wears"
            description="Ecommerce stuff"
            allowRememberMe
            label="Pay now"
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}

        /> 
    )
}


export default StripeCheckoutButton;