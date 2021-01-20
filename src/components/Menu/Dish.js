import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Dish(props) {
    const {DishName, DishDescription} = props
    let image = ""
    try {
        image = require(`../../images/${DishName}.jpg`)
    } catch(e) {
        console.log("No image found")
    }
    return (
        <Card>
            <Card.Img variant="top" src={ image } />
            <Card.Body>
                <Card.Title>{DishName}</Card.Title>
                <Card.Text>
                    {DishDescription}
                        </Card.Text>
                <Button href='#anchor' variant="primary" className="reserveButton">Reserve A Table</Button>
            </Card.Body>
        </Card>
    );
}
