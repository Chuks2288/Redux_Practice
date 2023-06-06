import React from 'react';
import { BsBag } from 'react-icons/bs';
import { useSelector } from 'react-redux';



const Navbar = () => {

    const { amount } = useSelector((store) => store.cart);

    return (
        <div className='nav'>
            <h1 className='nav-header'>Redux Toolkit</h1>

            <div className='cart'>
                <BsBag className='cartIcon' />
                <span className='total-amount'>{amount}</span>
            </div>
        </div>
    )
}

export default Navbar