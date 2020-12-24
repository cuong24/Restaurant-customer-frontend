import './App.css';
import React from 'react';
import Contact from '../Contact/Contact';
import TableSetUp from '../TableSetUp/TableSetUp';
import Menu from '../Menu/Menu';
import AboutUs from '../AboutUs/AboutUs';
import Navsbar from '../NavsBar/NavsBar';

function App() {
  return (
    <div className="App" style={{ width: 'fit-content', margin:'auto'}}>
      <Navsbar/>
      <Menu/>
      <TableSetUp/>
      <AboutUs/>
      <Contact/>
    </div>
  );
}

export default App;
