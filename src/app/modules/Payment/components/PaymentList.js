import React from 'react'
import { useSelector } from 'react-redux'
import PaymentItem from '../components/PaymentItem'
function PaymentList() {

    const paymentReducer = useSelector(({payment}) => payment)

    return (
        <div>
            
            {/* {JSON.stringify(paymentReducer)} */}
            {paymentReducer.payments.map((item,index) => (
                <PaymentItem item={item}></PaymentItem>
            ))}
        </div>
    )
}

export default PaymentList
