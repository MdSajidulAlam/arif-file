import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Food.css'

const Food = (props) => {
    const { handleAddToCart, food } = props
    const { name, img, price } = food
    return (
        <div className='col-lg-4 col-sm-12 mt-5 phones-card'>
            <Card className=' shadow-lg rounded w-75'>
                <div className='d-flex justify-content-center align-items-center mt-2'>
                    <Card.Img className='card-image rounded' variant="top" src={img} />
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Button onClick={() => handleAddToCart(food)} variant="primary">Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Food;