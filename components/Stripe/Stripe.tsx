import Link from 'next/link'
import React from 'react'
const StripePayment = () => {
  return (
    <div>
      <Link href={'https://buy.stripe.com/test_00g7tBfqg7dM2Q0cMN'}>
        Pay with Stripe
      </Link>
    </div>  
  )
}

export default StripePayment