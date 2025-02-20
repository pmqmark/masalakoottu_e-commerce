import React from 'react'
import TopBanner from '../../Components/common/TopBanner'
import grapesbanner from '../../assets/common/grapesbanner.jpg' 
import CheckoutForms from '../../Components/CheckoutPage/CheckoutForms'
import OrderSection from '../../Components/CheckoutPage/OrderSection'

const Checkout = () => {
  return (
    <div>
      <TopBanner title='Checkout' smallhead='Home / Shop' image={grapesbanner}/>
      <CheckoutForms/>
      <OrderSection/>
    </div>
  )
}

export default Checkout
