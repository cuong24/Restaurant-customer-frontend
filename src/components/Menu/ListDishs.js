import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FoodImage from '../../images/logo192.png';
import { CardDeck, Pagination } from "react-bootstrap";

export default function ListDisk(props) {
    const [dishes, setDishes] = useState([]);
    const [pageLimit, setPageLimit] = useState(false);
    const [activePage, setActivePage] = useState(4);

    const nextPage = () => {
        setActivePage(activePage + 1);
        setPageLimit(false);
    }

    const previousPage = () => {
        console.log(activePage);
        setActivePage(activePage - 1);
        console.log(activePage);
        if(activePage == 2) {
            setPageLimit(true);
        }
    }

    const firstPage = () => {
        setActivePage(1);
        setPageLimit(true);
    }


    return (
        <div>
            <CardDeck style={{ width: 'fit-content', margin: 'auto' }} >
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
            <br />
            <Pagination>
                <Pagination.First onClick = {() => firstPage()}/>
                <Pagination.Prev disabled = {pageLimit} onClick = {() => previousPage()}/>
                <Pagination.Item >{activePage}</Pagination.Item>
                <Pagination.Next onClick = {() => nextPage()}/>
                {/* <Pagination.Last /> */}
            </Pagination>
        </div>

    );
}
