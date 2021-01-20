import React from 'react';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import FoodImage from '../../images/logo192.png';
import ListDishs from './ListDishs';

export default function Menu() {

    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Main">
                <ListDishs FoodImage1={FoodImage} Category='main'/>
            </Tab>
            <Tab eventKey="profile" title="Appetizer">
                <ListDishs FoodImage1={FoodImage} Category='appetizer'/>
            </Tab>
            <Tab eventKey="contact" title="Dessert">
                <ListDishs FoodImage1={FoodImage} Category='dessert' />
            </Tab>
        </Tabs>
    );
}