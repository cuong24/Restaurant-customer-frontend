import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FoodImage from '../../images/logo192.png';
import { CardDeck } from "react-bootstrap";

export default function ListDisk(props) {

    return (
        <CardDeck style={{ width: 'fit-content', margin:'auto'}} >
            <Card>
                <Card.Img variant="top" src={props.FoodImage1} />
                <Card.Body>
                    <Card.Title>Tên món</Card.Title>
                    <Card.Text>
                        Mô tả món
            </Card.Text>
                    <Button href='#anchor' variant="primary">Đặt chỗ</Button>
                </Card.Body>
            </Card>
            <Card >
                <Card.Img variant="top" src={FoodImage} />
                <Card.Body>
                    <Card.Title>Tên món</Card.Title>
                    <Card.Text>
                        Mô tả món
            </Card.Text>
                    <Button href='#anchor' variant="primary">Đặt chỗ</Button>
                </Card.Body>
            </Card>
            <Card >
                <Card.Img variant="top" src={FoodImage} />
                <Card.Body>
                    <Card.Title>Tên món</Card.Title>
                    <Card.Text>
                        Mô tả món
            </Card.Text>
                    <Button href='#anchor' variant="primary">Đặt chỗ</Button>
                </Card.Body>
            </Card>
        </CardDeck>
    );
}
