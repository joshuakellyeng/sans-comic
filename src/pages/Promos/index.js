import React from 'react';
import Card from '../../components/Card'

const Promos = () => {
    const arr = [1,2,3,4,5,6,7,9,1,1,1,1,1,1,1]
    return (
        <div className='flex justify-center flex-wrap my-1 px-1'>
            {
                arr.map(num => <Card  />)
            }
        </div>
    );
}

export default Promos;
