import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Ha4tAFpKeGNa20JtpS8D0zUX8Mic8uCrF7I4h378BMgRyLX2eZqjcA92Kc596PBIL6QqO0GoXiTkFmIlGLTjnWq0068lPO046';
    const onToken = token => {
        console.log(token);
        alert('Payment Sucesfull')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='E-Commerce Test Site'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Panel Now'
            token={onToken}
            stripeKey = { publishableKey }
        />
    )
}

export default StripeCheckoutButton;

