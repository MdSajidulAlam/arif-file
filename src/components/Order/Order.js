import React from 'react';
import './Order.css'

const Order = (props) => {
    const { name, img } = props.food
    return (
        <div>
            <div className="d-flex justify-content-start align-items-center mt-3">
                <img className="rounded-circle ordered-img" src={img} alt="" />
                <p className='ms-2 fw-bold'>{name}</p>

            </div>
        </div>
    );
};

export default Order;