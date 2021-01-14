import React, {useState, useEffect} from 'react';
import ListDisk from './ListDishs';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import FoodImage from '../../images/logo192.png';
import ListDishs from './ListDishs';

export default function Menu(props) {

    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Main">
                <ListDishs FoodImage1={FoodImage} Category='main'/>
            </Tab>
            <Tab eventKey="profile" title="Appitizer">
                <ListDishs FoodImage1={FoodImage} Category='appitizer'/>
            </Tab>
            <Tab eventKey="contact" title="Dessert">
                <ListDishs FoodImage1={FoodImage} Category='dessert' />
            </Tab>
        </Tabs>
    );
}