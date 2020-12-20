import React from 'react';
import ListDisk from './ListDishs';
import Carousel from "react-bootstrap/Carousel";
import FoodImage from '../../images/logo192.png';

export default function Wrapper() {
    return (
        <Carousel>
            <Carousel.Item>
                <ListDisk FoodImage1 = {FoodImage}></ListDisk>
            </Carousel.Item>
            <Carousel.Item>
                <ListDisk FoodImage1 = {FoodImage}></ListDisk>
            </Carousel.Item>
            <Carousel.Item>
                <ListDisk FoodImage1 = {FoodImage}></ListDisk>
            </Carousel.Item>
        </Carousel>
    );
}