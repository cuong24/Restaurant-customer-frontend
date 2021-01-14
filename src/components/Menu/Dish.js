import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Dish(props) {


    return (
        <Card>
            <Card.Img variant="top" src={props.FoodImage} />
            <Card.Body>
                <Card.Title>{props.DishName}</Card.Title>
                <Card.Text>
                    {props.DishDescription}
                        </Card.Text>
                <Button href='#anchor' variant="primary">Đặt chỗ</Button>
            </Card.Body>
        </Card>
    );
}
