import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FoodImage from '../../images/logo192.png';
import { CardDeck, Pagination } from "react-bootstrap";
const getDishesEndPoint = 'http://localhost:8080/students/'

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
