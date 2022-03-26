import { faRandom, faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import Order from '../Order/Order';

const Cart = (props) => {
    const { cart, remove } = props
    return (
        <div className="shop-cart mt-5">
            <div>
                <h3>Order Summary</h3>
                <h4>Your Order:</h4>
            </div>
            <div>
                {
                    cart.map(food => <Order food={food}></Order>)
                }
                <div className='mb-2 mt-3'>
                    <Button variant="primary">Choose one <FontAwesomeIcon icon={faRandom}></FontAwesomeIcon> </Button>
                </div>
                <div>
                    <Button onClick={remove} variant="success">Delete <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon> </Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;