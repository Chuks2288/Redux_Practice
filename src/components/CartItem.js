import React from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, img, title, price, amount }) => {

    const dispatch = useDispatch();


    return (
        <article className='cart-item'>
            <div className='cart-item-header'>
                <img src={img} alt={title} />

                <div>
                    <h4>{title}</h4>
                    <h4 className='item-price'>${price}</h4>
                    <button className='remove-btn'
                        onClick={() => dispatch(removeItem(id))}
                    >remove</button>
                </div>
            </div>
            <div className='amount-container'>
                <button className='amount-btn'
                    onClick={() => dispatch(increase({ id }))}>
                    <MdOutlineKeyboardArrowUp />
                </button>
                <p className='amount'>{amount}</p>
                <button className='amount-btn'
                    onClick={() => {
                        if (amount === 1) {
                            dispatch(removeItem(id))
                            return;
                        }
                        dispatch(decrease({ id }))
                    }}>
                    <MdOutlineKeyboardArrowDown />
                </button>
            </div>
        </article>
    )
}

export default CartItem