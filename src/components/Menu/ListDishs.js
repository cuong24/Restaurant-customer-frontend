import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FoodImage from '../../images/logo192.png';

export default function ListDisk(props) {
    console.log(props)
    console.log(props.FoodImage1)
    return (
        <div class="container">
            <div class="card-deck mb-3 text-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src= {props.FoodImage1} />
                    <Card.Body>
                        <Card.Title>Tên món</Card.Title>
                        <Card.Text>
                            Mô tả món
                        </Card.Text>
                        <Button variant="primary">Đặt chỗ</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src= {FoodImage} />
                    <Card.Body>
                        <Card.Title>Tên món</Card.Title>
                        <Card.Text>
                            Mô tả món
                        </Card.Text>
                        <Button variant="primary">Đặt chỗ</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src= {FoodImage} />
                    <Card.Body>
                        <Card.Title>Tên món</Card.Title>
                        <Card.Text>
                            Mô tả món
                        </Card.Text>
                        <Button variant="primary">Đặt chỗ</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
