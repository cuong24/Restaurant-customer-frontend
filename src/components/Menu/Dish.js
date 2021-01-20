import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Dish(props) {
    const {FoodImage, DishName, DishDescription} = props
    return (
        <Card>
            <Card.Img variant="top" src={FoodImage} />
            <Card.Body>
                <Card.Title>{DishName}</Card.Title>
                <Card.Text>
                    {DishDescription}
                        </Card.Text>
                <Button href='#anchor' variant="primary">Đặt chỗ</Button>
            </Card.Body>
        </Card>
    );
}
