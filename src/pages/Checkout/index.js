import React from 'react';
import CartCard from '../../components/CartCard'
const Checkout = () => {
    const arr = [1,2,3,4,5]
    return (
        <div className="">
              {
                arr.map(num => <CartCard  />)
            }
        </div>
    );
}

export default Checkout;
