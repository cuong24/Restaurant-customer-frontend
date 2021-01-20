import React, { useState, useEffect } from "react";
import { CardDeck, Pagination } from "react-bootstrap";
import Dish from './Dish';
const getDishesEndPoint = 'http://54.214.208.194:8989/menu'

export default function ListDishs(props) {
    const {Category, FoodImage1} = props
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

    const loadDishes = (movePage) => {
        if (movePage === 0) {
            fetch(`${getDishesEndPoint}/${Category}&maxResults=${elementsPerPage}`).then(response => response.json())
                .then(data => {
                    setDishes(data)
                });
        } else {
            fetch(`${getDishesEndPoint}/${Category}?startAt=${(activePage - 1 + movePage)* 3}&maxResults=${elementsPerPage}`)
                .then(response => response.json())
                .then(data => {
                    setDishes(data)
                });
        }
    }

    return (
        <div>
            <CardDeck style={{ width: "800px", margin: 'auto' }} >
            { dishes.map(el => (
                <Dish FoodImage={FoodImage1} DishName={el.name} DishDescription={el.description} />
                    )) }
            </CardDeck>
            <br />
            <Pagination>
                <Pagination.First onClick={() => firstPage()} />
                <Pagination.Prev disabled={pageLimit} onClick={() => previousPage()} />
                <Pagination.Item >{activePage}</Pagination.Item>
                <Pagination.Next onClick={() => nextPage()} />
            </Pagination>
        </div>

    );
}
