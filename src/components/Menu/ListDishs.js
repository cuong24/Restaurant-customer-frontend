import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FoodImage from '../../images/logo192.png';
import { CardDeck, Pagination } from "react-bootstrap";
import Dish from './Dish';
const getDishesEndPoint = 'http://localhost:8989/menu/'

export default function ListDishs(props) {
    const [dishes, setDishes] = useState([]);
    const [pageLimit, setPageLimit] = useState(false);
    const [activePage, setActivePage] = useState(1);
    const elementsPerPage = 3

    useEffect(() => {
        loadDishes(0)
        setPageLimit(true)
     }, []);

    const nextPage = () => {
        setActivePage(activePage + 1);
        setPageLimit(false);
        loadDishes(1);
    }

    const previousPage = () => {
        setActivePage(activePage - 1);
        if (activePage === 2) {
            setPageLimit(true);
        }
        loadDishes(-1);
    }

    const firstPage = () => {
        setActivePage(1);
        setPageLimit(true);
        loadDishes(0);
    }

    const loadDishes = (x) => {
        if (x === 0) {
            let endpoint = getDishesEndPoint + props.Category + '?startAt=' + 0 + '&maxResults=' + elementsPerPage;
            fetch( endpoint).then(response => response.json())
                .then(data => {
                    setDishes(data)
                });
        } else {
            fetch(getDishesEndPoint + props.Category + '?startAt=' + (activePage - 1 + x) * 3 + '&maxResults=' + elementsPerPage)
                .then(response => response.json())
                .then(data => {
                    setDishes(data)
                });
        }
    }

    return (
        <div>
            <CardDeck style={{ width: 'fit-content', margin: 'auto' }} >
            { dishes.map(el => (
                <Dish FoodImage={props.FoodImage1} DishName={el.name} DishDescription={el.description}  />
                    )) }
            </CardDeck>
            <br />
            <Pagination>
                <Pagination.First onClick={() => firstPage()} />
                <Pagination.Prev disabled={pageLimit} onClick={() => previousPage()} />
                <Pagination.Item >{activePage}</Pagination.Item>
                <Pagination.Next onClick={() => nextPage()} />
                {/* <Pagination.Last /> */}
            </Pagination>
        </div>

    );
}
