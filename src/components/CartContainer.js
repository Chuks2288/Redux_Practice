import React from 'react';
import CartItem from '../components/CartItem'
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { openModal, closeModal } from '../features/modal/modalSlice';



const CartContainer = () => {

    const dispatch = useDispatch();

    const { cartItems, total, amount } = useSelector((store) => store.cart);

    if (amount < 1) {
        return <section>
            <header className='empty-cart'>
                <h2>your Cart</h2>
                <h4>is currently empty</h4>
            </header>
        </section>
    }
    return (
        <section className='cart'>
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            <footer>
                <hr />
                <h4>total <span>${total.toFixed(2)}</span></h4>

                <button className='btn clear-btn'
                    // onClick={() => dispatch(clearCart())}
                    onClick={() => dispatch(openModal())}
                >Clear Cart</button>
            </footer>
        </section>
    )
}

export default CartContainer