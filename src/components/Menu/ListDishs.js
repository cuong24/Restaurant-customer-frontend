import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FoodImage from '../../images/logo192.png';
import { CardDeck, Pagination } from "react-bootstrap";
import Dish from './Dish';
const getDishesEndPoint = 'http://localhost:8080/students/'

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

    const loadDishes = () =>{
        fetch(getDishesEndPoint)
        .then(response => response.json())
        .then(data => {
            setDishes(data)
        });
    }

    return (
        <div>
            <CardDeck style={{ width: 'fit-content', margin: 'auto' }} >
                <Dish FoodImage={props.FoodImage1} DishName='Haha' DishDescription='Dish Description' />
                <Dish FoodImage={props.FoodImage1} DishName='Haha' DishDescription='Dish Description' />
                <Dish FoodImage={props.FoodImage1} DishName='Haha' DishDescription='Dish Description' />
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
