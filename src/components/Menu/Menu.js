import React from 'react';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ListDishes from './ListDishes';

export default function Menu() {

    return (
        <Tabs defaultActiveKey="main" id="uncontrolled-tab-example" className="menu">
            <Tab eventKey="main" title="Main">
                <ListDishes Category='main'/>
            </Tab>
            <Tab eventKey="appetizer" title="Appetizer">
                <ListDishes Category='appetizer'/>
            </Tab>
            <Tab eventKey="dessert" title="Dessert">
                <ListDishes Category='dessert' />
            </Tab>
        </Tabs>
    );
}