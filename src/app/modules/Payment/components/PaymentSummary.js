import React from 'react'
import { useSelector } from 'react-redux'


export default function PaymentSummary() {
    const paymentReducer = useSelector(({payment}) => payment)

      return (
            <div>Summary
                  <p>count : {paymentReducer.summary.count}</p>
                  <p>sum : {paymentReducer.summary.sum}</p>
            </div>
      )
}
