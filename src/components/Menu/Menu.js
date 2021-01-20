import React from 'react';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ListDishes from './ListDishes';

export default function Menu() {

    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="menu">
            <Tab eventKey="home" title="Main">
                <ListDishes Category='main'/>
            </Tab>
            <Tab eventKey="profile" title="Appetizer">
                <ListDishes Category='appetizer'/>
            </Tab>
            <Tab eventKey="contact" title="Dessert">
                <ListDishes Category='dessert' />
            </Tab>
        </Tabs>
    );
}