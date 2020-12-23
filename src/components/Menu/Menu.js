import React from 'react';
import ListDisk from './ListDishs';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import FoodImage from '../../images/logo192.png';

export default function Menu() {
    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Main">
                <ListDisk FoodImage1={FoodImage}></ListDisk>
            </Tab>
            <Tab eventKey="profile" title="Appitizer">
                <ListDisk FoodImage1={FoodImage}></ListDisk>
            </Tab>
            <Tab eventKey="contact" title="Dessert">
                <ListDisk FoodImage1={FoodImage}></ListDisk>
            </Tab>
        </Tabs>
    );
}