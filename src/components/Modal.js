import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal, closeModal } from '../features/modal/modalSlice';
import { clearCart } from '../features/cart/cartSlice';


const Modal = () => {

    const dispatch = useDispatch();


    return (
        <div className='modal-container'
            onClick={() => dispatch(closeModal())}>
            <div className='modal'>
                <h4>Remove all items from your shopping cart?</h4>

                <div className='btn-container'>
                    <button type='button' className='btn confirm-btn'
                        onClick={() => {
                            dispatch(closeModal());
                            dispatch(clearCart());
                        }}
                    >confirm</button>
                    <button type='button' className='btn cancel-btn'
                        onClick={() => dispatch(closeModal())}
                    >cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal